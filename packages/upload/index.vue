<template>
  <div class="zv-upload" ref="zvUpload">
    <div class="zv-upload-title">
      {{ title || localeLang.title || '上传附件' }}
      <span>{{ subTitle || localeLang.subTitle || '格式要求' }}</span>
    </div>
    <p v-if="haveExample" class="green" @click="exampleVisible = true">
      <zv-svg-icon icon-class="eye" />
      {{ localeLang.example || '示例图' }}
    </p>
    <template v-if="type === 'default'">
      <el-upload :fileList="fileList" v-bind="$attrs" v-on="$listeners">
        <template v-slot:default>
          <slot />
        </template>
      </el-upload>
    </template>
    <template v-else>
      <el-upload
        v-bind="$attrs"
        v-on="$listeners"
        :fileList="fileList"
        :on-preview="handlePictureCardPreview"
      >
        <div class="zv-upload__upload">
          <i class="el-icon-plus"></i>
          <div class="zv-upload__upload-name" v-if="uploadName">
            {{ uploadName }}
          </div>
        </div>
      </el-upload>
    </template>

    <zv-dialog
      v-model="dialogVisible"
      bodyHeight="600px"
      width="600px"
      :btn-list="[]"
      title=" "
      append-to-body
    >
      <img width="100%" :src="dialogImageUrl" alt="" />
    </zv-dialog>

    <zv-dialog
      v-if="haveExample && exampleVisible"
      v-model="exampleVisible"
      bodyHeight="600px"
      width="600px"
      :btn-list="[]"
      :title="
        exampleDescription || localeLang.exampleDescription || '示例描述的部分'
      "
      append-to-body
    >
      <slot name="exampleImgSlot">
        <img
          width="100%"
          :src="exampleImgSrc"
          :alt="
            localeLang.exampleImage ||
              localeLang.exampleDescription ||
              '示例图片'
          "
        />
      </slot>
    </zv-dialog>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvDialog from '../dialog/index'
import ZvSvgIcon from '../svg/index'
import langMixins from '../mixins/langMixins'
import lang from './lang/index'

export default create({
  name: 'Upload',
  components: { ZvDialog, ZvSvgIcon },
  mixins: [langMixins],
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'imgLists'].indexOf(value) >= 0
      }
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    // 是否需要示例
    haveExample: {
      type: Boolean,
      default: false
    },
    exampleDescription: {
      type: String
    },
    fileList: {
      type: Array
    },
    exampleImgSrc: {
      type: String
    },
    uploadName: {
      type: String
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      exampleVisible: false
    }
  },
  watch: {
    fileList: {
      handler(array) {
        if (this.$attrs.limit) {
          let dom = this.$refs.zvUpload
          dom = dom.querySelector('.el-upload--picture-card')
          if (array.length === this.$attrs.limit) {
            if (dom && dom.style.display !== 'none') {
              dom.style.display = 'none'
            }
          } else {
            if (dom && dom.style.display === 'none') {
              dom.style.display = 'inline-block'
            }
          }
        }
      }
    }
  },
  computed: {
    localeLang() {
      return lang[this.localLocale] || {}
    }
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
})
</script>
