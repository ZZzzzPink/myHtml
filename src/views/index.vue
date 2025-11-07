<template>
    <el-button type="primary" @click="captureScrollContent">截取.scr所有内容为图片</el-button>
    <div class="scr h-10vh overflow-y-scroll overflow-x-hidden" @scroll="onScroll" ref="scrContainer">
        <div class="h-100vh">
            <div v-html="ruleContent"></div>
            <div v-for="it in 100">
                <div style="color: #36D;">{{ it }}</div>
            </div>
        </div>
    </div>
    <video style="height: 300px;width: 300px;background-color: #fff;" controls playsinline
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"></video>

    <px-space>
        <px-button>Primary</px-button>
        <px-button theme="success">Success Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="warning">Warning Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="danger">Danger Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="info">Info Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="sakura">Sakura</px-button>
    </px-space>
    <el-button @click="$router.push('/vueUse')">vueUes</el-button>
    <el-button @click="$router.push('/videoRecorder')" type="success">屏幕录制</el-button>
    <el-button @click="$router.push('/cameraRecorder')" type="primary">摄像头录制</el-button>
    <el-button @click="$router.push('/esign')" type="warning">电子签名</el-button>
    <!-- 主题切换模块 -->
    <div class="theme-section">
        <color-picker v-model:pureColor="pureColor" @pureColorChange="handleThemeChange" />
        <p>当前计数: {{ count }} </p>
    </div>

    <!-- 文件操作模块 -->
    <div class="file-section">
        <el-button type="primary" size="default" @click="handleChooseFiles">选择文件夹</el-button>
        <block v-if="filesContent !== ''">
            {{ filesContent }}
        </block>
        <vue-office-docx :src="prvFile" style="height: 500px" />
        <iframe v-if="prvFile" style="width: 300px; height: 300px" :src="prvFile" frameborder="0"></iframe>
    </div>

    <!-- 组件测试模块 -->
    <div class="component-section">
        <comPone ref="defineExposeTest" title="组件测试">
            <h4>插槽内容</h4>
            <template v-slot:header>
                <h3>具名插槽</h3>
            </template>
            <template v-slot:data="res">
                作用域插槽数据: {{ res.data[0] }}
                作用域插槽数据: {{ res.data[0] }}
            </template>
            <!-- <h4>插槽</h4> -->
        </comPone>
    </div>

    <!-- 路由导航模块 -->
    <div class="navigation-section">
        <RouterLink to="/progressBar">圆形进度条</RouterLink>
        <button @click="navigateWithQuery">query路由</button>
        <button @click="navigateWithParams">params路由</button>
        <button @click="() => router.push('/luckyDraw')">抽奖</button>
    </div>

    <!-- 列表操作模块 -->
    <div class="list-section">
        <ul>
            <li v-for="(item, index) in lists">
                <input type="checkbox" :value="item.text" />
                {{ item.text }}
            </li>
        </ul>
        <button @click="handleRemoveItem">删除第一项</button>
    </div>

    <!-- 视频播放模块 -->
    <div class="media-section">
        <video-player id="playerId" class="vjs-custom-skin" :options="playerOptions" />
    </div>

    <!-- 树形选择模块 -->
    <div class="tree-section">
        <el-tree-select ref="elTree" v-model="value" :data="data" check-strictly :render-after-expand="false"
            style="width: 240px" :props="{ value: 'label', label: 'label' }" node-key="value"
            @node-click="handleTreeNodeClick" />
        <el-button type="success" @click="handleDownload">下载测试</el-button>
    </div>

    <!-- 轮播图模块 -->
    <div class="carousel-section">
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="(item, index) in 4" :key="item">
                <img v-if="index == 0" style="width: 100%" src="https://bing.img.run/uhd.php" alt="Bing图片1" />
                <img v-if="index == 1" style="width: 100%" src="https://bing.img.run/rand_uhd.php" alt="Bing随机图片" />
                <img v-if="index == 2" style="width: 100%" src="https://api.dujin.org/pic/ghibli/qyqx" alt="吉卜力图片1" />
                <img v-if="index == 3" style="width: 100%" src="https://api.dujin.org/pic/ghibli" alt="吉卜力图片2" />
            </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 布局测试模块 -->
    <div class="layout-section">
        <div class="testP">粘性布局测试</div>
        <div class="header">固定标题</div>
        <div class="container">
            <p v-for="i in 28" :key="i">测试内容 {{ i }}</p>
        </div>
    </div>

    <!-- 图片懒加载模块 -->
    <div class="lazy-load-section">
        <div class="img-box">
            <template v-for="item in 20">
                <img class="img-item" data-src="https://bing.img.run/rand.php" src="" :alt="'图片' + item">
            </template>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { PiniaTest } from '../stores/PiniaTest'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import videojs from 'video.js'
import { ElMessage } from 'element-plus'
import VueOfficeDocx from '@vue-office/docx'
import Vconsole from 'vconsole'
import comPone from '../components/defineExpose.vue'
import html2canvas from 'html2canvas'

/* 开发环境启用vConsole */
if (process.env.NODE_ENV == "development") {
    new Vconsole()
}
const ruleContent = "<p style=\"text-align: center;\"><span style=\"font-size: 16px;\"><strong>隐私协议</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 14px;\"><strong>引言</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">您的信任对我们至关重要，我们深知个人信息对您的重要性。我们将按照法律法规要求，在合理、必要的范围内，向您收集个人信息。我们竭尽全力通过合理有效的信息安全技术和管理流程，采取相应的安全保护措施，防止您的信息泄露、损毁或丢失。鉴于此，嬉乐安咛服务提供者（或简称“我们”）制定本《隐私协议》，并提示您注意：</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">本协议适用于嬉乐安咛服务提供者以网站、客户端、小程序以及随技术发展出现的新形态向您提供的所有产品和服务。</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\"><strong>如我们及关联公司的产品或服务中使用了嬉乐安咛产品或服务（如使用嬉乐安咛账号登录app），但未设独立隐私权政策/协议的，则本政策/协议同样适用于该部分产品或服务。我们及关联公司就其向您提供的产品或服务单独设有隐私政策/协议的，则相应产品或服务适用相应隐私权政策/协议。若某一平台单独的隐私政策/协议约定不全的则可参考适用其他嬉乐安咛相关平台隐私政策/协议的相应约定。</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\"><strong>在使用嬉乐安咛各项产品或服务前，请您务必仔细阅读本协议，并确保您已了解并同意其中的内容，特别是加粗、加下划线标识的条款，您应重点阅读。若您不同意本隐私协议的任何部分，您可以选择不使用嬉乐安咛各项产品或服务。如对本协议有任何疑问，您可向本协议第11条中公布的联系方式与我们联系。</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\"><strong>我们非常重视对未成年人个人信息的保护。根据相关法律法规的规定，若您是18周岁以下的未成年人，在使用嬉乐安咛服务前，应事先取得您的家长或法定监护人的同意；若您是14周岁以下的儿童，在使用嬉乐安咛的产品或服务前，应当按照注册、使用流程，事先取得您的家长或法定监护人的同意，并由您的家长或法定监护人帮助您完成产品或服务注册流程，以便您能使用我们提供的产品或服务。</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span><span style=\"font-size: 12px; font-family: Arial;\">本协议主要向您说明：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">1. </span><span style=\"font-size: 12px; font-family: Arial;\">我们的角色</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2. </span><span style=\"font-size: 12px; font-family: Arial;\">我们收集您哪些信息</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3. </span><span style=\"font-size: 12px; font-family: Arial;\">我们如何使用您的信息</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4. </span><span style=\"font-size: 12px; font-family: Arial;\">我们在何种情况下共享您的信息</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">5. </span><span style=\"font-size: 12px; font-family: Arial;\">公开披露</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6. </span><span style=\"font-size: 12px; font-family: Arial;\">我们如何存储您的信息</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7. </span><span style=\"font-size: 12px; font-family: Arial;\">我们如何保护您的信息</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8. </span><span style=\"font-size: 12px; font-family: Arial;\">您所享有的权利</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">9. </span><span style=\"font-size: 12px; font-family: Arial;\">个人信息主体注销账号</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">10. </span><span style=\"font-size: 12px; font-family: Arial;\">未成年人信息如何保护</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11. </span><span style=\"font-size: 12px; font-family: Arial;\">您如何联系我们</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">12. </span><span style=\"font-size: 12px; font-family: Arial;\">法律适用与争议解决</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">13. </span><span style=\"font-size: 12px; font-family: Arial;\">条款更新</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">1. </span><span style=\"font-size: 14px;\"><strong>我们的角色</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">我们的角色：我们是您的数据的控制者。这意味着我们有权决定如何处理您的个人信息以及用于何种目的。我们知道您关心如何使用和分享您的数据，同时我们感谢您的信任，我们将谨慎且理智地做到这一点。</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">2. </span><span style=\"font-size: 14px;\"><strong>我们收集您哪些信息</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">我们收集您的信息以合法、合理、必要为原则，在向您提供某项具体服务时，我们将明确告知您将收集的信息以及用途，来响应您具体的服务请求。根据您选择的服务，我们在以下场景可能收集以下信息的一种或多种：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.1 </span><span style=\"font-size: 12px;\"><strong>账号登录时，您需提供手机号、第三方账号进行账号登录。如您不提供相关信息，嬉乐安咛将无法为您创建账号和后续服务。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.2 </span><span style=\"font-size: 12px;\"><strong>当您注册成功后，在App个人资料栏您可以选择性填写您的个人信息，包括</strong></span><span style=\"font-size: 12px;\"><u><strong>您的昵称、头像、生日信息、电话号码、身份证号码、联系地址等实名信息</strong></u></span><span style=\"font-size: 12px;\"><strong>。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.3 </span><span style=\"font-size: 12px;\"><strong>如您使用第三方账号进行登录，为了满足网络实名制要求，在您使用发布、评论及其他要求实名认证的功能与服务前，我们将另行收集您的手机号码以完成实名认证。请您谨慎考虑后提供这类信息，若您拒绝提供，您可能无法正常使用嬉乐安咛App。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.4 </span><span style=\"font-size: 12px;\"><strong>为了帮助我们了解嬉乐安咛平台的运行情况，我们可能会记录相关信息，包括您的使用频率、崩溃数据、总体使用情况、性能数据。我们不会将存储于分析软件的信息关联到您的任何个人信息。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.5 </span><span style=\"font-size: 12px;\"><strong>在您使用我们的产品与服务过程中，为识别账号或设备的异常状态、了解或优化产品服务的适配性、提供应用程序版本升级或固件版本升级服务，我们会收集您的使用情况并存储为网络日志信息，包括IMEI、Android ID、OAID（Android）、存储权限、位置信息或其他唯一设备标识符、MAC地址、IP地址、操作系统版本、设备生产商、设备型号、注册日期以及用于访问服务的设备的设置。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.6 </span><span style=\"font-size: 12px;\"><strong>当您复制短信验证码，分享或接收被分享口令信息时，您的剪切板功能可能会被调用读取或写入相关信息。其中读取短信验证码时用于使用手机号和验证码的方式登录时自动填入验证码；分享或接受被分享嬉乐安咛平台</strong></span><span style=\"font-size: 12px;\"><u><strong>口令信息</strong></u></span><span style=\"font-size: 12px;\"><strong>时用于把</strong></span><span style=\"font-size: 12px;\"><u><strong>口令信息</strong></u></span><span style=\"font-size: 12px;\"><strong>写入剪切板，或监控设备其他应用分享的口令。</strong></span><span style=\"font-size: 12px;\"><u><strong>剪切板信息</strong></u></span><span style=\"font-size: 12px;\"><strong>仅会在您的设备上进行处理，我们不会存储您的剪切板信息用于任何其他途径。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.7 </span><span style=\"font-size: 12px;\"><strong>设备权限调用汇总：我们对嬉乐安咛在提供服务过程中，会调用会您的主要设备权限汇总如下。您可以在设备的设置功能中选择关闭部分或全部权限。在不同设备中，权限显示方式及关闭方式可能有所不同，具体请参考设备及系统开发方说明或指引：</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>我们需要的权限及用处如下：</strong></span></p><table style=\"width: auto; text-align: start;\"><tbody><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">设备权限</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">操作系统</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">对应业务功能与调用权限目的</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是否询问</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">用户可否关闭权限</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">存储权限</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">1.发布内容时读取相册和媒体内容、进行存储2.截图分享3.App安全运行与风控验证4.用“反馈意见”功能时读取相册内容5.编辑资料选择头像图片时读取相册内容</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">位置信息权限</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">1.根据用户所在位置显示内容，如附近展厅等2.用户发布内容时定位所在区域</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">设备信息权限</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">构建用户身份唯一标识符，为您完成安全风控、问题诊断、同步设备信息（如硬件型号、IMEI号码或其他唯一标识符、MAC地址、IP地址等）等功能。</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">通知</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">App相关消息推送</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">网络权限</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">开启上网功能，实时读取与更新</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">相机（摄像头）</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">1. 实名认证2. 发布内容时进行拍摄3. 活动相关二维码扫描4. 使用AR拍摄功能时进行拍摄</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr><tr><td colspan=\"1\" rowspan=\"1\" width=\"78\"><span style=\"font-size: 12px;\">电话状态</span></td><td colspan=\"1\" rowspan=\"1\" width=\"61\"><span style=\"font-size: 12px;\">Android/iOS</span></td><td colspan=\"1\" rowspan=\"1\" width=\"136\"><span style=\"font-size: 12px;\">1.APP安全运行与风控验证2.内容通知3.展示和其他功能优化</span></td><td colspan=\"1\" rowspan=\"1\" width=\"48\"><span style=\"font-size: 12px;\">是</span></td><td colspan=\"1\" rowspan=\"1\" width=\"88\"><span style=\"font-size: 12px;\">可以</span></td></tr></tbody></table><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.8 </span><span style=\"font-size: 12px;\"><u><strong>.我们可能从第三方间接获取您的个人信息：如您使用第三方平台的账号登录时，经过您明确的账号绑定后，第三方平台会向我们同步您在该平台使用的头像信息，以使您可以直接登录并使用嬉乐安咛app。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.9 </span><span style=\"font-size: 12px;\"><u><strong>支付功能。您可以在嬉乐安咛购买商品/服务以及嬉乐安咛服务。在您使用该功能的过程中可能会需要进行支付，在支付过程中，我们可能会收集您的第三方支付账号（支付宝账号、微信账号及有关账号），为了确定您本人的身份，我们还可能会对您进行人脸识别。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2.10 </span><span style=\"font-size: 12px;\"><strong>此外，为实现在线反馈嬉乐安咛的使用问题，我们需要收集您的以下信息：问题反馈内容、相关截图。收集此类信息是了更好的分析与定位问题、与您联系获取更多信息以解决问题，并对服务情况进行追踪闭环。如您不提供此类信息，我们可能将无法对您反馈的问题进行有效的定位与解决。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">a. </span><span style=\"font-size: 12px;\"><strong>为提高您使用嬉乐安咛服务的安全性，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或嬉乐安咛相关协议规则的情况，我们可能使用或整合您的账号信息、设备交互信息、网络日志信息以及我们取得您授权或依据法律共享的信息，来综合判断您帐户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">b. </span><span style=\"font-size: 12px;\"><u><strong>若您提供的信息中含有其他用户的个人信息，在向我们提供这些个人信息之前，您需确保您已经取得合法的授权。</strong></u></span><span style=\"font-size: 12px; font-family: Arial;\">若我们将信息用于本协议未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的，或者我们主动从第三方处获取您的个人信息，均会事先获得您的同意。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">c. </span><span style=\"font-size: 12px;\"><u><strong>征得授权同意的例外：您充分理解并同意，我们在以下情况下收集、使用、共享、转让、公开披露您的个人信息无需您的授权同意，且我们可能不会响应您提出的更正/修改、删除、注销、撤回同意、索取信息的请求：</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px;\"><u><strong>与国家安全、国防安全有关的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ii. </span><span style=\"font-size: 12px;\"><u><strong>与公共安全、公共卫生、重大公共利益有关的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">iii. </span><span style=\"font-size: 12px;\"><u><strong>与犯罪侦查、起诉、审判和判决执行等司法或行政执法有关的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">iv. </span><span style=\"font-size: 12px;\"><u><strong>出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">v. </span><span style=\"font-size: 12px;\"><u><strong>您自行向社会公众公开的个人信息；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">vi. </span><span style=\"font-size: 12px;\"><u><strong>从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">vii. </span><span style=\"font-size: 12px;\"><u><strong>根据与您签订和履行相关协议或其他书面文件所必需的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">viii. </span><span style=\"font-size: 12px;\"><u><strong>用于维护所提供的产品及/或服务的安全稳定运行所必需的，例如发现、处置产品及/或服务的故障；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ix. </span><span style=\"font-size: 12px;\"><u><strong>为合法的新闻报道所必需的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">x. </span><span style=\"font-size: 12px;\"><u><strong>学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">xi. </span><span style=\"font-size: 12px;\"><u><strong>法律法规规定的其他情形。</strong></u></span></p><p style=\"text-align: left;\"><br></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">3. </span><span style=\"font-size: 14px;\"><strong>我们如何使用您的信息</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.1 </span><span style=\"font-size: 12px;\"><strong>我们会保持您的个人数据及时更新；安全地存储或销毁它；最小化收集和保留我们需要为您提供服务所需的数据；保护个人信息免遭泄露、滥用、未经授权的访问和披露；采取适当的技术措施保护您个人信息的安全。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.2 </span><span style=\"font-size: 12px;\"><strong>我们将您的信息用于以下用途：</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px;\"><strong>根据我们与您签订的合同向您提供服务（购物、核销展厅门票等）。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ii. </span><span style=\"font-size: 12px;\"><strong>按照我们收集信息时所述的要求提供其他您所要求的服务。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">iii. </span><span style=\"font-size: 12px;\"><strong>维持我们储存和处理您个人信息的数据技术系统的完整性和安全性。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">iv. </span><span style=\"font-size: 12px;\"><strong>检测和调查信息泄露、非法活动和欺诈行为。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">v. </span><span style=\"font-size: 12px;\"><strong>联系您解决问题。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">vi. </span><span style=\"font-size: 12px;\"><strong>经过您许可的其它用途。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.3 </span><span style=\"font-size: 12px;\"><strong>第三方SDK</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px; font-family: Arial;\">金融级实人认证</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">开发者:杭州阿里云智能科技有限公司</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">用途：用于获取用户实名认证信息（如姓名、身份证号等）用于实名认证</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：（1）设备基础信息：设备制造商、设备品牌、设备类型及型号、设备名称、设备操作系统信息、设备内存及存储大小、电池及电量信息、基带信息、开机时间、屏幕亮度及分辨率、CPU信息、系统时区、系统语言、充电状态、系统内核信息、传感器列表、光线传感器信息；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">（2）设备标识信息：IDFA 、IDFV、Android ID、OAID；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">（3）设备网络信息：BSSID、SSID、运营商信息、网络类型、SIM卡状态；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">（4）设备应用信息：SDK宿主APP信息（包括：宿主APP应用名称、宿主APP应用版本、宿主APP安装时间）。</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私政策链接：</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\">https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202107281509_18386.html</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2. </span><span style=\"font-size: 12px; font-family: Arial;\">设备风险识别</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">开发者:杭州阿里云智能科技有限公司</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：设备基础信息：设备制造商、设备品牌、设备类型及型号、设备名称、设备操作系统信息、设备内存及存储大小、传感器列表、电池及电量信息、基带信息、开机时间、屏幕亮度及分辨率、CPU信息、系统时区、系统语言、充电状态、系统内核信息；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">设备标识信息（必要）：IDFV；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">设备标识信息：IMEI（国际移动识别码）、IMSI（国际移动用户识别码）、MAC地址、ICCID（集成电路卡识别码）、硬件序列号、IDFA、Android ID、OAID、Google AID（Google广告ID）、蓝牙MAC；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">设备网络信息：IP地址、附近WIFI列表、BSSID、SSID、运营商信息、网络类型、网络状态、SIM卡状态、网卡信息；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">设备应用信息：SDK宿主APP信息（包括：应用名称、应用版本、安装时间）、应用列表。</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私协议链接：</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\">https://terms.aliyun.com/legal-agreement/terms/suit_bu1_ali_cloud/suit_bu1_ali_cloud202111120818_92724.html?spm=a2c4g.11186623.0.0.31362a75Z9G5wk</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3. </span><span style=\"font-size: 12px; font-family: Arial;\">微信Open SDK </span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">开发者:深圳市腾讯计算机系统有限公司</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">用途：用于分享链接至微信、微信支付、微信登录</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：微信头像、昵称信息</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">官网链接： </span><span style=\"font-size: 12px;\">https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/getting_started/terminology_introduce.html</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私政策链接：</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">https://support.weixin.qq.com/cgi-bin/mmsupportacctnodeweb-bin/pages/RYiYJkLOrQwu0nb8#__section1</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4. </span><span style=\"font-size: 12px; font-family: Arial;\">QQ互联 SDK</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">开发者:深圳市腾讯计算机系统有限公司</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">用途：用于分享链接至QQ</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：设备型号信息,剪切板信息内存卡权限,特定应用（QQ、TIM）的安装情况</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">官网链接： </span><span style=\"font-size: 12px;\">https://connect.qq.com/index.html</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私政策链接：</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\">https://wiki.connect.qq.com/qq%e4%ba%92%e8%81%94sdk%e9%9a%90%e7%a7%81%e4%bf%9d%e6%8a%a4%e5%a3%b0%e6%98%8e</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">5. </span><span style=\"font-size: 12px; font-family: Arial;\">APP支付客户端SDK</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">开发者：支付宝(杭州)信息技术有限公司</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">用途：用于支付宝支付、支付宝登录</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：可变更设备唯一标识、基本设备信息、软件安装列表以及网络信息</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">官网链接：</span><span style=\"font-size: 12px;\">https://open.alipay.com/</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私协议链接：</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">https://opendocs.alipay.com/open/54/01g6qm#支付宝%20App%20支付客户端%20SDK%20</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.4 </span><span style=\"font-size: 12px;\"><strong>移动智能终端补充设备标识体系统一调用</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>开发者：中国信息通信研究院</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：根据“移动智能终端补充设备标识体系”技术要求，华为、小米、OPPO、vivo、中兴、努比亚、魅族、联想、三星等设备厂商均将逐步实现本标识体系，联盟计划开发并发布支持多厂商的统一的补充设备标识调用SDK，协助移动应用开发者更便捷地访问移动智能终端补充设备标识体系，推进相关业务。</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：无</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>官网链接：http://www.msa-alliance.cn/col.jsp?id=120</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私政策链接：https://www.msa-alliance.cn/col.jsp?id=122</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.5 </span><span style=\"font-size: 12px;\"><strong>对象存储OSS</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>开发者:阿里云计算有限公司</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：消息推送</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：设备型号,设备操作系统信息</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私协议链接：https://terms.alicdn.com/legal-agreement/terms/privacy_policy_full/20240202100310511/20240202100310511.html</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6 </span><span style=\"font-size: 12px;\"><strong>消息推送</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>开发者：每日互动股份有限公司</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">收集信息范围：设备识别码（包含IMEI、IDFA、Android ID、MAC、OAID、Google Advertising ID(GAID)、Serial Number、IMSI、UAID、ICCID、IDFV、CAID）,应用列表信息,网络信息（包含IP地址、WIFI信息、SSID、BSSID、基站信息、运营商信息、DHCP）以及位置相关信息</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私协议链接：https://docs.getui.com/privacy/</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.1 </span><span style=\"font-size: 12px;\"><strong>华为</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：用于向华为手机用户推送消息</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：应用信息（应用基本信息），设备信息（AAID、设备标识符、设备硬件信息、系统基本信息、系统设置）</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私政策链接：</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/sdk-data-security-0000001050042177</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.2 </span><span style=\"font-size: 12px;\"><strong>小米</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">用途：用于向小米手机用户推送消息</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：设备标识OAID和加密的Android ID，以及使用推送服务的应用信息如应用包名、版本号和运行状态，设备相关信息如设备厂商、设备型号、设备内存、操作系统版本、小米推送SDK版本、设备归属地（国家或地区）、SIM卡运营商名称、当前网络类型、WiFi状态。其中当前网络类型、SIM卡运营商名称仅在设备本地读取，不会上传至小米服务器</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私政策链接：</span><span style=\"font-size: 12px;\">https://dev.mi.com/console/doc/detail?pId=1822</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.3 </span><span style=\"font-size: 12px;\"><strong>VIVO</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：用于向VIVO手机用户推送消息</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：设备标识信息（如IMEI、EmmCID、UFSID、ANDROIDID、GUID、GAID、OPENID、VAID、OAID、RegID、加密的Android ID）、使用推送服务的应用软件信息（如应用包名、版本号、APPID、安装、卸载、恢复出厂设置、运行状态）、设备制造商、网络相关信息（如IP地址、网络类型）、国家码、设备类型；收集消息创建、送达和点击的时间戳，并暂存从第三方应用处获得并推送给您的消息内容；收集您的推送SDK版本号、设备型号、操作系统版本、当前网络类型、消息发送结果、通知栏状态（如通知栏权限、用户点击行为）、锁屏状态（如是否锁屏，是否允许锁屏通知）；收集您的IP地址用于设备的网络优化；会使用您的手机系统状态信息、应用行为数据；会收集您的推送信息内容、通知栏状态（如通知栏权限、用户点击行为）以形成用户画像。</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">SDK隐私政策链接：</span><span style=\"font-size: 12px;\">https://dev.vivo.com.cn/documentCenter/doc/652</span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.4 </span><span style=\"font-size: 12px;\"><strong>OPPO</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：用于向OPPO手机用户推送消息</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：RegisterId、appKey、appSecret、MCS应用包名、应用版本号、推送SDK版本号</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私政策链接：</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>https://open.oppomobile.com/new/developmentDoc/info?id=11228</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.5 </span><span style=\"font-size: 12px;\"><strong>魅族</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：用于向魅族手机用户推送消息</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：设备相关信息，如手机品牌、手机型号、系统版本、系统语言，以及设备标识符（通过相关标识符生成应用间不相关的用户标识：push ID）。此外，还将暂时收集受应用开发者要求向您推送的消息内容，收集第三方应用基于 push ID 分类的、应用间不相关的标签、别名信息；收集第三方应用接收推送消息开关的状态信息；会收集消息送达后的相关展示、划掉、点击行为类数据。</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私政策链接：http://open.flyme.cn/docs?id=202</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.6.6 </span><span style=\"font-size: 12px;\"><strong>荣耀</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>用途：用于向荣耀手机用户推送消息</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>收集信息范围：设备标识符（AAID、PushToken）</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>SDK隐私政策链接：https://developer.honor.com/cn/docs/11002/guides/sdk-data-security</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3.7 </span><span style=\"font-size: 12px;\"><strong>需要注意的是，以上使用方式涵盖了我们使用您信息的主要方式。我们可能不时地通过更新网站页面、App版本、小程序版本或设备固件等方式，为用户提供更加多样化的服务。当我们要将信息用于本协议未载明的其他用途时，或要将基于特定目的收集而来的信息用于其他目的时，会以签署协议、弹窗提示、站内公告、更新本协议等形式再次征求您的同意。</strong></span></p><p style=\"text-align: left;\"><br></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">4. </span><span style=\"font-size: 14px;\"><strong>我们在何种情况下共享您的信息</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px;\"><u><strong>我们不会与嬉乐安咛以外的公司、组织和个人共享您的个人信息，但以下情况除外：</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4.1 </span><span style=\"font-size: 12px;\"><u><strong>在法定情形下的共享：我们可能会根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求，对外共享您的个人信息。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4.2 </span><span style=\"font-size: 12px;\"><u><strong>获取明确同意的情况下共享：获得您的明确同意后，我们会与第三方共享您的个人信息。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4.3 </span><span style=\"font-size: 12px;\"><u><strong>与关联公司间共享：为便于我们向您提供产品和服务，识别账号异常，保护其他用户或公众的人身财产安全免遭侵害，您的个人信息可能会与我们的关联公司和/或其指定的服务提供商共享。我们只会共享必要的个人信息，且受本协议中所声明目的的约束，如果我们共享您的个人敏感信息或关联公司改变个人信息的使用及处理目的，将再次征求您的授权同意。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4.4 </span><span style=\"font-size: 12px;\"><u><strong>我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px;\"><u><strong>在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ii. </span><span style=\"font-size: 12px;\"><u><strong>在嬉乐安咛服务提供者发生合并、内外部业务重组、收购或破产清算情形，或其他涉及合并、收购或破产清算情形时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本协议的约束，否则我们将要求该公司、组织和个人重新向您征求授权同意。</strong></u></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">5. </span><span style=\"font-size: 14px;\"><strong>公开披露</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">我们仅仅会在以下情况公开披露您的个人信息：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">5.1 </span><span style=\"font-size: 12px;\"><strong>获得您的同意后。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">5.2 </span><span style=\"font-size: 12px;\"><strong>基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。</strong></span></p><p style=\"text-align: left;\"><br></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">6. </span><span style=\"font-size: 14px;\"><strong>我们如何存储您的信息</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">按照法律规定，我们在中华人民共和国境内收集和产生的个人信息将存储在【服务器地址】中，除非法律有另外规定，嬉乐安咛将按照如下期限保存您的信息：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6.1 </span><span style=\"font-size: 12px;\"><strong>在您使用嬉乐安咛产品或服务期间，我们将持续为您保存，除非您主动删除或注销嬉乐安咛账号。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6.2 </span><span style=\"font-size: 12px;\"><strong>我们将根据嬉乐安咛的数据备份策略定期对收集的信息进行备份处理。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6.3 </span><span style=\"font-size: 12px;\"><strong>当您删除信息或注销嬉乐安咛账号后，嬉乐安咛将停止对您个人信息的使用，并在十五个工作日内删除您的个人信息，但根据法律法规的要求需要保存的除外。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6.4 </span><span style=\"font-size: 12px;\"><strong>您的个人信息经过匿名化与脱敏处理后将形成可以使用的流通数据，嬉乐安咛对此数据的保存和使用无需另外征得您的同意。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6.5 </span><span style=\"font-size: 12px;\"><strong>当我们的产品或服务停止运营的情形时，我们将以推送通知、公告等形式通知您，并在合理的期限内删除您的个人信息或匿名化处理。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">7. </span><span style=\"font-size: 14px;\"><strong>我们如何保护您的信息</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7.1 </span><span style=\"font-size: 12px;\"><strong>我们已采取符合业界标准、合理可行的安全防护措施保护您的信息，防止个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。例如，在您的浏览器与服务器之间交换数据时受SSL协议加密保护；我们同时对嬉乐安咛各网站提供HTTPS协议安全浏览方式；我们会使用加密技术提高个人信息的安全性；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7.2 </span><span style=\"font-size: 12px;\"><strong>互联网并非绝对安全的环境，使用嬉乐安咛产品或服务时，我们强烈建议您不要使用非嬉乐安咛提供的通信方式发送您的信息。您可以通过我们的服务建立联系和相互分享。当您通过我们的服务创建交流、交易或分享时，您可以自主选择沟通、交易或分享的对象，作为能够看到您的交易内容、联络方式、交流信息或分享内容等相关信息的第三方。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7.3 </span><span style=\"font-size: 12px;\"><strong>在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。事件相关情况我们将以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7.4 </span><span style=\"font-size: 12px;\"><strong>您充分理解并同意，我们有权审查用户注册所提供的身份信息是否真实、有效，并积极采取技术与管理等合理措施保障用户账号的安全、有效；您有义务妥善保管其账号及密码，并正确、安全地使用其账号及密码。任何一方未尽上述义务导致账号密码遗失、账号被盗等情形而给用户和他人的民事权利造成损害的，应当承担由此产生的法律责任。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7.5 </span><span style=\"font-size: 12px;\"><strong>若您发现有他人冒用或盗用您的嬉乐安咛账号及密码、或任何其他未经您合法授权使用的情形时，应立即以要求的有效方式通知并告知我们。您通知时，应提供与您注册身份信息相一致的个人有效身份信息，收到您的有效请求并核实身份后，会根据您的要求或结合具体情况采取相应措施（包括但不限于暂停该账号的登录和使用，解绑删除账号绑定的智能设备等），因根据您的请求采取相应措施而造成您及其他用户损失的，由您自行承担。若您没有提供有效身份信息或您提供的个人有效身份信息与所注册的身份信息不一致的，我们有权拒绝您的请求，因此而造成的损失，由您自行承担。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">8. </span><span style=\"font-size: 14px;\"><strong>您所享有的权利</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">您有权利管理您的信息，包括：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8.1 </span><span style=\"font-size: 12px;\"><strong>访问您的个人信息：</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px; font-family: Arial;\">账号信息：如果您希望访问或编辑您的账号中的个人资料信息、更改您的密码等，您可以登录您的账号后通过设置等进行访问或编辑。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ii. </span><span style=\"font-size: 12px; font-family: Arial;\">其它个人信息（例如生日、实名信息）：对于您使用我们的产品或服务过程中产生的个人信息，您可以在对应服务页面进行访问；</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8.2 </span><span style=\"font-size: 12px;\"><strong>更正您的个人信息</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">当您发现我们处理您的个人信息有错误时，您有权要求我们做出更正或补充。您可以通过访问个人信息设置页面进行更正或补充说明或者直接联系我们。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8.3 </span><span style=\"font-size: 12px;\"><strong>删除您的个人信息</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">在下列情况中，您可以联系嬉乐安咛客服提出删除个人信息请求：</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">1. </span><span style=\"font-size: 12px; font-family: Arial;\">如果我们处理个人信息的行为违反法律法规。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">2. </span><span style=\"font-size: 12px; font-family: Arial;\">如果我们收集、使用您的个人信息，却未征得您的明确同意。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">3. </span><span style=\"font-size: 12px; font-family: Arial;\">如果我们处理个人信息的行为严重违反了与您的约定。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">4. </span><span style=\"font-size: 12px; font-family: Arial;\">如果您不需要使用我们的产品与服务，或您主动注销了嬉乐安咛账号。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">5. </span><span style=\"font-size: 12px; font-family: Arial;\">如果永久不需要我们提供产品或服务。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">6. </span><span style=\"font-size: 12px; font-family: Arial;\">如果我们与他人共享或转让您的个人信息，却未征得您的明确同意，您有权要求我们及第三方删除。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">7. </span><span style=\"font-size: 12px; font-family: Arial;\">如果我们违反与您的约定，公开披露您的个人信息，您有权要求我们立即停止公开披露的行为，并发布通知要求相关接收方删除相应的信息。</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">如果我们决定响应您的删除请求，我们将停止为您提供产品或服务，根据适用法律的要求删除您的个人信息。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8.4 </span><span style=\"font-size: 12px;\"><strong>个人信息副本</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">如您需要您的个人信息副本，可通过第11条联系方式，与我们取得联系。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">8.5 </span><span style=\"font-size: 12px;\"><strong>撤回同意的权利</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">i. </span><span style=\"font-size: 12px; font-family: Arial;\">在我们依赖您的同意来处理数据时，您在任何时候有权撤回该同意,具体可通过注销嬉乐安咛账号的方式，来撤回您的同意，操作路径App“我的-个人信息-注销账号”。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">ii. </span><span style=\"font-size: 12px; font-family: Arial;\">如您想更改您的授权范围，您可以通过您的手机设备修改个人的权限设置，操作路径为App“我的-通用设置-系统权限管理”。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">iii. </span><span style=\"font-size: 12px; font-family: Arial;\">当您撤回同意或授权后，我们将无法继续为您提供撤回同意或授权所对应的服务，也将不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的同意或授权而开展的个人信息处理。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">9. </span><span style=\"font-size: 14px;\"><strong>个人信息主体注销账号</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">9.1 </span><span style=\"font-size: 12px;\"><strong>您随时可以注销此前注册的账号，如您需要，您可以通过以下任一方式申请注销：</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">9.1.1登录嬉乐安咛，通过“我的-个人信息-注销账号”提交账号注销申请，关于您注销账号的风险以及应满足的条件等，请详见《注销协议》；</span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: Arial;\">9.1.2通过第11条的联系方式，与我们取得联系,进行个信息主体账号注销。</span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">9.2 </span><span style=\"font-size: 12px;\"><strong>在您注销账号之后，我们将停止为您提供服务，并依据您的要求，除法律另有规定外，我们将在15个工作日内删除或以匿名化的方式处理您的个人信息。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">9.3 </span><span style=\"font-size: 12px;\"><u><strong>您知悉注销账号后，您在嬉乐安咛上留存的数据可能被删除且无法恢复，因您注销账号后信息删除产生的后果由您自行承担，故如有需要，请您在注销账号前自行对您的数据信息进行备份。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">9.4 </span><span style=\"font-size: 12px;\"><u><strong>如果您的账号是通过手机号注册的，如您由于个人原因更换手机号码，为保证您的设备安全，请务必在更换手机号码前解绑您绑定的设备，否则，如果其他人继续使用相同手机号，号码所有者将可以看到并操控您的设备，一切后果由您自行承担。</strong></u></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">10. </span><span style=\"font-size: 14px;\"><strong>未成年人信息如何保护</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">10.1 </span><span style=\"font-size: 12px;\"><strong>我们的产品和服务主要面向成年人。对于经法定监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、法定监护人明确同意或者保护未成年人所必要的情况下使用或公开披露合法收集到的未成年人的个人信息。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">10.2 </span><span style=\"font-size: 12px;\"><strong>如果我们发现在未事先获得法定监护人同意的情况下收集了未成年人的个人信息，会设法尽快删除相关数据。如果法定监护人有理由相信未成年人未经他们事先同意而向嬉乐安咛提交了个人信息，请联系我们以确保删除此类个人信息，并保证未成年人取消订阅任何适用的嬉乐安咛服务。</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 14px; font-family: Arial;\">11. </span><span style=\"font-size: 14px;\"><strong>您如何联系我们</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.1 </span><span style=\"font-size: 12px;\"><strong>如果您对本隐私协议有任何疑问、意见或建议，或者您想要行使任何权利，或者您有任何要求要与我们讨论，请通过以下方式与我们处理个人信息保护事宜的部门联系：</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.2 </span><span style=\"font-size: 12px;\"><strong>开发者信息：杭州嬉乐咛安文化创意发展有限公司</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.3 </span><span style=\"font-size: 12px;\"><strong>服务提供者/运营方：杭州嬉乐咛安文化创意发展有限公司</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.4 </span><span style=\"font-size: 12px;\"><strong>地址：浙江省杭州市余杭区仓前街道欧美金融城4幢21楼</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.5 </span><span style=\"font-size: 12px;\"><strong>电子邮件：jxzkgwlw@163.com</strong></span></p><p style=\"text-align: left;\"><span style=\"color: rgb(51, 112, 255); font-size: 12px; font-family: Arial;\">11.6 </span><span style=\"font-size: 12px;\"><strong>为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。一般情况下，我们将在15天内回复。如果您对我们的回复不满意，特别是我们的个人信息处理行为损害了您的合法权益，您还可以向网信、电信、公安及市监等监管部门进行投诉或举报。</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 14px;\"><strong>12 &nbsp;法律适用与争议解决</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>本隐私协议的解释、变更、执行和争议的解决均应适用中国法律。如您与我们的嬉乐安咛APP发生争议，双方应本着友好协商的原则进行解决。如协商不成，用户可以将争议提交至浙江省杭州市余杭区人民法院解决。</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 14px;\"><strong>13 &nbsp;条款更新</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>13.1为向您提供更好的服务和更优质的用户体验，本协议会根据业务调整、法律法规或政策的变化而发生适时变更。如您在隐私政策调整或变更后继续使用我们提供的任一服务或访问我们相关网站的，我们相信这代表您已充分阅读、理解并接受修改后的隐私协议并受其约束。</strong></span></p><p style=\"text-align: left;\"><span style=\"font-size: 12px;\"><strong>13.2本隐私协议至少每12个月更新一次，本次更新于：2025年08月22日。</strong></span></p><p style=\"text-indent: 21pt; text-align: left;\"><span style=\"font-size: 12px; font-family: &quot;Times New Roman&quot;;\"> </span></p><p style=\"text-indent: 21pt; text-align: right;\"><span style=\"font-size: 12px;\"><strong>嬉乐安咛</strong></span></p><p style=\"text-indent: 21pt; text-align: right;\"><span style=\"font-size: 12px;\"><strong> 2025年08月22日版本</strong></span></p><p style=\"text-indent: 21pt; text-align: right;\"><span style=\"font-size: 12px;\"><strong> &nbsp;2025年08月22日生效</strong></span></p><p><br></p>"
const Store = PiniaTest()
const { count } = storeToRefs(useCounterStore())
const router = useRouter()

const pureColor = ref(null)
const prvFile = ref(null)
const filesContent = ref('')
const scrContainer = ref(null)

const lists = reactive([
    { id: 1, text: '张' },
    { id: 2, text: '吕' },
    { id: 3, text: '王' }
])

const value = ref(null)
const elTree = ref(null)
const data = [
    {
        value: "1",
        label: "Level one 1",
        children: [
            {
                value: "1-1",
                label: "Level two 1-1",
                children: [
                    {
                        value: "1-1-1",
                        label: "Level three 1-1-1",
                    },
                ],
            },
        ],
    },
    {
        value: "2",
        label: "Level one 2",
        children: [
            {
                value: "2-1",
                label: "Level two 2-1",
                children: [
                    {
                        value: "2-1-1",
                        label: "Level three 2-1-1",
                    },
                ],
            },
            {
                value: "2-2",
                label: "Level two 2-2",
                children: [
                    {
                        value: "2-2-1",
                        label: "Level three 2-2-1",
                    },
                ],
            },
        ],
    },
    {
        value: "3",
        label: "Level one 3",
        children: [
            {
                value: "3-1",
                label: "Level two 3-1",
                children: [
                    {
                        value: "3-1-1",
                        label: "Level three 3-1-1",
                    },
                ],
            },
            {
                value: "3-2",
                label: "Level two 3-2",
                children: [
                    {
                        value: "3-2-1",
                        label: "Level three 3-2-1",
                    },
                ],
            },
        ],
    },
]

const playerOptions = ref({
    playbackRates: [0.5, 1.0, 2.0],
    autoplay: false,
    muted: true,
    loop: false,
    controls: true,
    preload: 'auto',
    language: 'zh-CN',
    aspectRatio: '16:9',
    fluid: true,
    sources: [{
        type: 'video/webm',
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'
    }],
    poster: '',
    notSupportedMessage: '此视频暂无法播放，请稍后再试',
    controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: true,
        fullscreenToggle: true
    }
})
const defineExposeTest = ref()

/** 选择文件夹并读取内容 */
const handleChooseFiles = async () => {
    if (!window.showDirectoryPicker) {
        ElMessage({
            message: "当前浏览器不支持目录选择功能",
            type: "error",
        });
        return;
    }

    try {
        const handle = await showDirectoryPicker();
        await openFiles(handle);

        let fileHandle = null;
        for (const child of handle.children) {
            if (child.kind === "file") {
                fileHandle = child;
                break;
            }
        }

        if (!fileHandle) {
            ElMessage({
                message: "未找到任何文件",
                type: "warning",
            });
            return;
        }

        const file = await fileHandle.getFile();

        if (!file.type.startsWith("text/")) {
            ElMessage({
                message: "仅支持文本文件",
                type: "warning",
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = (e) => {
            filesContent.value = e.target.result;
        };

        reader.onerror = (e) => {
            console.error("文件读取失败:", e.target.error);
            ElMessage({
                message: "文件读取失败，请检查文件格式",
                type: "error",
            });
        };
    } catch (error) {
        ElMessage({
            message: "目录选择失败：" + error.message,
            type: "error",
        });
    }
};

/** 递归打开文件夹 */
const openFiles = async (filePaths) => {
    if (!filePaths.kind || filePaths.kind === "file") {
        return;
    }

    const entries = await filePaths.values();
    filePaths.children = [];

    for await (const entry of entries) {
        filePaths.children.push(entry);
        await openFiles(entry);
    }
};

/** 删除列表第一项 */
const handleRemoveItem = () => {
    lists.shift()
}

/** 处理树节点点击事件 */
const handleTreeNodeClick = () => {
    setTimeout(() => {
        const data = elTree.value.getCurrentKey()
    }, 100)
}

/** 切换主题颜色 */
const handleThemeChange = () => {
    document.documentElement.style.setProperty('--theme-color', pureColor.value)
    Store.themeColor = pureColor.value
}

const appInstance = getCurrentInstance().appContext.config.globalProperties

onMounted(async () => {
    initLazyLoadObserver()
    pureColor.value = Store.themeColor

    /* 初始化视频播放器 */
    const player = videojs('playerId', {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fluid: false,
        height: 200,
        width: 300
    })

    /* 测试数据请求 */
    fetchTestData()
})

/** 初始化图片懒加载观察者 */
const initLazyLoadObserver = () => {
    const images = document.querySelectorAll('.img-item')
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                observer.unobserve(entry.target)
            }
        })
    })
    images.forEach(item => observer.observe(item))
}

/** 获取测试数据 */
const fetchTestData = async () => {
    try {
        const res = await appInstance.$test({
            url: 'https://v1.hitokoto.cn/',
            method: 'get'
        })
        console.log('API响应:', res)
    } catch (err) {
        console.error('API请求失败:', err)
    }
}

/** 使用query参数跳转路由 */
const navigateWithQuery = () => {
    router.push({
        path: '/r',
        query: { a: 2 },
        params: { text: '这是路径跳转的参数' }
    })
}

/** 使用params参数跳转路由 */
const navigateWithParams = () => {
    router.push({
        name: 'rou',
        params: { text: 'name传参' }
    })
}

/** 下载文件 */
const handleDownload = () => {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = 'https://down.vmaxcloud.com.cn/apk/%E6%B5%8B%E8%AF%95223.zip'
    link.download = '测试223.zip'
    link.click()
}
const onScroll = (e) => {
    console.log("🐛 e -412", " 👉", e)
}

/** 截取.scr容器所有内容为图片 */
const captureScrollContent = async () => {
    if (!scrContainer.value) {
        ElMessage.error('未找到.scr容器')
        return
    }

    try {
        ElMessage.info('正在生成图片，请稍候...')

        const element = scrContainer.value
        
        // 保存原始样式
        const originalOverflow = element.style.overflow
        const originalHeight = element.style.height
        const originalMaxHeight = element.style.maxHeight
        
        // 临时移除滚动和高度限制，以便捕获所有内容
        element.style.overflow = 'visible'
        element.style.height = 'auto'
        element.style.maxHeight = 'none'

        // 使用html2canvas截取完整内容
        const canvas = await html2canvas(element, {
            useCORS: true, // 允许跨域图片
            allowTaint: true,
            backgroundColor: '#000',
            scale: 2, // 提高清晰度
            logging: false,
            scrollY: -window.scrollY, // 修正滚动偏移
            scrollX: -window.scrollX,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight
        })

        // 恢复原始样式
        element.style.overflow = originalOverflow
        element.style.height = originalHeight
        element.style.maxHeight = originalMaxHeight

        // 将canvas转换为图片并下载
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = `scr-content-${Date.now()}.png`
            link.click()
            URL.revokeObjectURL(url)
            
            ElMessage.success('图片生成成功！')
        }, 'image/png')

    } catch (error) {
        console.error('截图失败:', error)
        ElMessage.error('截图失败: ' + error.message)
    }
}
</script>

<style lang="scss" scoped>
p,
button,
div {
    color: var(--theme-color)
}

.testP {
    background-color: gray;
    line-height: 72px;
    position: sticky;
    top: 0px;
    background-color: gray;
    line-height: 72px;
    position: sticky;
    top: 0px;
}

.header {
    background-color: black;
    color: white;
    text-align: center;
    font-size: 36px;
    line-height: 72px;
    position: sticky;
    top: 0px;
}

.container {
    background-color: gray;
    color: white;
    font-size: 24px;
    line-height: 48px;
    white-space: pre;
    background-color: gray;
    color: white;
    font-size: 24px;
    line-height: 48px;
    white-space: pre;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    background-color: #d3dce6;
}

:deep(.title2) {
    color: rgb(47, 192, 115) !important;
}

.img-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .img-item {
        width: 70%;
        height: 100px;
        margin-bottom: 20px;
    }
}
</style>
