<template>
  <div style="height: inherit;">
    <h4>Bpmn 使用记录</h4>
    <!-- 画布 -->
    <div id="canvas"></div>
    <!-- 右侧 -->
    <div id="properties"></div>
  </div>
</template>
<script>
import BpmnModeler from 'bpmn-js/lib/Modeler';

// 左侧栏 添加样式就可以显示
import 'bpmn-js/dist/assets/diagram-js.css'; // 左边工具栏以及编辑节点的样式
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

// 右侧栏 借助于 bpmn-js-properties-panel
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
// 右侧栏 样式
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';

import { basicXML } from './basicXML';

export default {
  name: 'Bpmn',
  data() {
    return {
      msg: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const bpmnModeler = new BpmnModeler({
        container: '#canvas', // basic
        propertiesPanel: {
          parent: '#properties',
        },
        additionalModules: [
          // 右边的属性栏
          propertiesProviderModule,
          propertiesPanelModule,
        ],
        moddleExtensions: {
          camunda: camundaModdleDescriptor,
        },

      });
      bpmnModeler.importXML(basicXML, (err, arr) => {
        if (err) {
          throw new Error('加载xml文件报错');
        } else {
          console.log('加载xml成功');
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  #canvas {
    /* background: chartreuse; */
    height: inherit;
  }
  #properties {
    position: fixed;
    top: 0;
    right: 0;
    width: 240px;
    /* background: khaki; */
  }
</style>
