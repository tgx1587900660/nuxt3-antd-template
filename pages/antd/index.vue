<template>
  <div :class="'h-[3000px] w-full'">
    <AppHeader />
    <div>
      <a-button @click="handleMessage"> button </a-button>
      <a-button @click="handleMessage2"> button2 </a-button>
      <a-button @click="handleMessage3"> button3 </a-button>
    </div>

    <hr />
    <div>
      <a-switch v-model:checked="ellipsis" />
      <a-typography-text :style="ellipsis ? { width: '100px' } : {}" :ellipsis="ellipsis ? { tooltip: 'I am ellipsis now!' } : false" content="Ant Design, a design language for background applications, is refined by Ant UED Team." />
    </div>

    <a-divider>With Text</a-divider>

    <hr />

    <a-row>
      <a-col :span="12">col-12</a-col>
      <a-col :span="12">col-12</a-col>
    </a-row>

    <hr />

    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

    <hr />

    <a-space>
      Space
      <a-button type="primary">Button</a-button>
      <a-upload>
        <a-button> Click to Upload </a-button>
      </a-upload>
      <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
        <a-button>Confirm</a-button>
      </a-popconfirm>
    </a-space>

    <hr />

    <a-affix :offset-top="top">
      <a-button type="primary" @click="top += 10">Affix top</a-button>
    </a-affix>
    <br />

    <hr />

    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="javascript:;">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="javascript:;">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>

    <hr />

    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent> Hover me [[ 有 Hydration 警告问题 ]] </a>
      <template #overlay :getPopupContainer="(node: any) => node.parentNode">
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>

    <hr />

    <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Title" sub-title="This is a subtitle" @back="() => null" />

    <hr />

    <a-pagination v-model:current="current" :total="50" show-less-items />

    <hr />

    <a-steps :current="1">
      <a-step>
        <!-- <span slot="title">Finished</span> -->
        <template #title>Finished</template>
        <template #description>
          <span>This is a description.</span>
        </template>
      </a-step>
      <a-step title="In Progress" sub-title="Left 00:00:08" description="This is a description." />
      <a-step title="Waiting" description="This is a description." />
    </a-steps>

    <hr />

    <div>
      <a-back-top />
      Scroll down to see the bottom-right
      <strong style="color: rgba(64, 64, 64, 0.6)">gray</strong>
      button.
      <div id="components-back-top-demo-custom">
        <a-back-top>
          <div class="ant-back-top-inner">UP</div>
        </a-back-top>
        Scroll down to see the bottom-right
        <strong style="color: #1088e9">blue</strong>
        button.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
const handleMessage = () => {
  message.info('This is a normal message')
}
const handleMessage2 = () => {
  message.success('This is a success message')
}

const handleMessage3 = () => {
  message.error('This is an error message')
}

const ellipsis = ref(true)

const top = ref(100)

const current = ref(3)
</script>

<style lang="less" scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
