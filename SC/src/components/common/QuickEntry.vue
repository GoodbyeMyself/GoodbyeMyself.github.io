<template>
	<div class="QuickEntry fr">
        <div class="Npm fr" @click='handleclick("https://www.npmjs.com/")'>
            <img src="../../assets/images/common/npm.png" alt="">
        </div>
        <div class="Gitlab fr" @click='handleclick("https://about.gitlab.com/")'>
            <img src="../../assets/images/common/gitlab.png" alt="">
        </div>
        <div class="Git fr" @click='handleclick("https://github.com/")'>
            <i class='iconfont icon-github-fill'></i>
        </div>
        <div class="Baiduwangpan fr" @click='handleclick("https://pan.baidu.com/")'>
            <img src="../../assets/images/common/wangpan.png" alt="">
        </div>
        <div class="Baidu fr" @click='handleclick("https://www.baidu.com/")'>
            <img src="../../assets/images/common/baidu.png" alt="">
        </div>
        <div class="Email fr" @click='handleclick("https://mail.163.com/")'>
            <img src="../../assets/images/common/email.png" alt="">
        </div>
        <div class="Youdao fr" @click='handleclick("http://fanyi.youdao.com/")'>
            <img src="../../assets/images/common/youdao.png" alt="">
        </div>
        <div class="Wangyiyun fr" @click='handleclick("https://music.163.com/")'>
            <img src="../../assets/images/common/Wangyiyun.png" alt="">
        </div>
        <div class="T fr" @click='handleclick("https://tool.lu/")'>
            <img src="../../assets/images/common/t.png" alt="">
        </div>
	</div>
</template>

<script>
export default {
	name: 'QuickEntry',
	data () {
		return {
			a: 1
		};
	},
	created () {
	},
	methods: {
		handleclick (url) {
			window.open(url);
		}
	}
};
</script>

<style lang="scss" scoped>
.QuickEntry {
	height: auto;
    .Wangyiyun {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
            border-radius:3px;
        }
    }
    .Youdao {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
        }
    }
    .Email {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
            border:1px solid #ddd;
            border-radius: 4px;
        }
    }
    .Baidu {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
            border:1px solid #ddd;
            border-radius: 4px;
        }
    }
    .Baiduwangpan {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
            border:1px solid #ddd;
            border-radius: 4px;
        }
    }
    .Git {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        .iconfont{
            font-size: 24px;
            color: #333;
        }
    }
    .Gitlab {
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 24px;
            height: 24px;
            margin-top: 14px;
        }
    }
    .Npm{
        height: auto;
        margin-right: 15px;
        cursor: pointer;
        img{
            display: block;
            width: 30px;
            height: 30px;
            margin-top: 11px;
        }
    }
    .T{
        height: auto;
        margin-right: 12px;
        cursor: pointer;
        img{
            display: block;
            width: 32px;
            height: 32px;
            margin-top: 10px;
        }
    }
}
</style>
