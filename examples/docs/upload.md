# Upload 组件

<!-- {.md} -->

---

<!-- {.md} -->

## 介绍

<!-- {.md} -->

上传组件

<!-- {.md} -->

## 基础用法

<!-- {.md} -->
<upload-demo></upload-demo>

::: demo

```html
<template>
  <div>
    <zv-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <zv-button size="small" type="primary">点击上传</zv-button>
    </zv-upload>

    <zv-upload
      title="上传一张图片"
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </zv-upload>

    <zv-upload
      action="#"
      title="多张图片上传带预览"
      list-type="picture-card"
      :auto-upload="false"
      type="imgLists"
      :before-remove="beforeRemove"
    >
    </zv-upload>

    <zv-upload
      action="#"
      title="多张图片上传带预览"
      list-type="picture-card"
      :auto-upload="false"
      type="imgLists"
      :before-remove="beforeRemove"
      have-example
      example-description="这是一个简单的描述文件，纯粹测试用的"
    >
    </zv-upload>
  </div>
</template>
```
```js

<script>
export default {
  name: 'UploadDemo',
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      imageUrl: ''
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

```

```css
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
```
:::

## Attributes

<!-- {.md} -->

| 参数      | 说明                                   | 类型     | 可选值 | 默认值    |
| --------- | -------------------------------------- | -------- | ------ | --------- |
| `type`      | `类型，是否是照片墙的形式，内附预览情况`                                 | `String` | `default | imgLists`      | `default`         |
| `title`      | `主标题`                                 | `String` | -      | -         |
| `subTitle`      | `副标题`                                 | `String` | -      | -         |
| `haveExample`      | `是否需要显示示例图片`                                 | `Boolean` | `true | false`      | `false`         |
| `exampleDescription`      | `显示示例图片的描述`                                 | `String` | -      | -         |
| `exampleImgSrc`      | `显示示例图片的路径`                                 | `String` | -      | -         |