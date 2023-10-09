<template>
  <a-layout class="layout_container">
    <a-layout-sider width="220px" v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">Logo</div>
      <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      :items="items"
    ></a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout_header">
        <div class="trigger">
          <menu-unfold-outlined
            v-if="collapsed"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else @click="() => (collapsed = !collapsed)" />
        </div>
        <a-space>
          <a-space class="user"><UserOutlined />用户</a-space>
          <a-button @click="logout">退出登录</a-button>
        </a-space>
      </a-layout-header>
      <a-layout-content class="layout_content">
        <a-tabs
          v-model:activeKey="activeTab"
          hide-add
          class="tabs_container"
          type="editable-card"
          @edit="onEdit"
        >
          <a-tab-pane
            v-for="tab in tabs"
            :key="tab.key"
            :tab="tab.title"
            :closable="tabs.length!==1"
          />
          <template #rightExtra> 
            <a-row>
              <a-button @click="removeOthers"><CloseOutlined /></a-button>
              <a-button @click="refresh"><UndoOutlined /></a-button>
            </a-row>
          </template>
        </a-tabs>

        <div class="page_container"></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter()
//菜单相关
const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
const items = reactive([
  {
    key: '1',
    label: 'Option 1',
    title: 'Option 1',
  },
  {
    key: '2',
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

const collapsed = ref<boolean>(false);

//标签相关
const activeTab = ref("1");
const tabs = ref<{
    key: string;
    title: string;
  }[]>([{
    key:'1',
    title:'tab1'
  },
  {
    key:'2',
    title:'tab2'
  }])
const onEdit = (key:any) => {
  const index = tabs.value.findIndex((e)=>e.key === key)
  tabs.value.splice(index,1)
  if(activeTab.value===key){
    activeTab.value = tabs.value[0].key
  }else{
    activeTab.value = tabs.value[index-1].key
  }

};

const removeOthers =()=>{
  const currentTab = tabs.value.find(e=>e.key===activeTab.value)
  if(!currentTab)return
  tabs.value = [currentTab]
  activeTab.value = currentTab.key
}

const refresh = ()=>{

}


const logout = ()=>{
  router.replace('/login')
}

</script>
<style scoped>
.layout_container {
  height: 100vh;
}

.logo {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
}

.layout_header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  justify-content: space-between;
}
.user{
  font-size: 16px;
}
.trigger {
  font-size: 20px;
}


.layout_content{
  display: flex;
  flex-flow: column nowrap;
}
.page_container {
  margin:0 16px 24px 16px;
  border-radius: 10px;
  padding: 24px;
  background: #fff;
  flex: 1;
}

.tabs_container{
  margin: 10px 10px 0 10px;
  
}
</style>
