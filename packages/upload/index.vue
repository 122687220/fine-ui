<template>
  <div class="zv-upload">
    <div class="zv-upload-title">
      {{ title }}
      <span>{{ subTitle }}</span>
      <i v-if="haveExample" class="green" @click="exampleVisible = true">
        示例
        <zv-svg-icon icon-class="eye" />
      </i>
    </div>
    <template v-if="type === 'default'">
      <el-upload v-bind="$attrs" v-on="$listeners">
        <template v-slot:default>
          <slot />
        </template>
      </el-upload>
    </template>
    <template v-else>
      <el-upload
        v-bind="$attrs"
        v-on="$listeners"
        :on-preview="handlePictureCardPreview"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </template>

    <zv-dialog
      v-model="dialogVisible"
      bodyHeight="600px"
      width="600px"
      :btn-list="[]"
      title=""
    >
      <img width="100%" :src="dialogImageUrl" alt="" />
    </zv-dialog>

    <zv-dialog
      v-if="haveExample && exampleVisible"
      v-model="exampleVisible"
      bodyHeight="600px"
      width="600px"
      :btn-list="[]"
      :title="exampleDescription"
    >
      <img width="100%" :src="exampleImgSrc" alt="示例图片" />
    </zv-dialog>
  </div>
</template>

<script>
import create from '../utils/create-basic'
import ZvDialog from '../dialog/index'
import ZvSvgIcon from '../svg/index'
export default create({
  name: 'Upload',
  components: { ZvDialog, ZvSvgIcon },
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'imgLists'].indexOf(value) >= 0
      }
    },
    title: {
      type: String,
      default: '上传附件'
    },
    subTitle: {
      type: String,
      default: '格式要求'
    },
    // 是否需要示例
    haveExample: {
      type: Boolean,
      default: false
    },
    exampleDescription: {
      type: String,
      default: '示例描述的部分'
    },
    exampleImgSrc: {
      type: String,
      default: '示例描述的部分'
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      exampleVisible: false
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
