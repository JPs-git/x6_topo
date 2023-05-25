<template>
  <div class="x6-root">
    <button @click="showNodeData">show</button>
    <button @click="saveData">save</button>
    <div class="flex">
      <div class="left flex">
        <div id="stencil" v-if="false"></div>
        <div id="container"></div>
      </div>
      <div class="right" v-if="showInfo">
        <el-form key="" id="nodeInfo" :model="formData">
          <el-from-item>
            <el-form-item label="节点名称">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="节点类型">
              <el-input v-model="formData.type"></el-input>
            </el-form-item>
            <el-form-item label="节点IP">
              <el-input v-model="formData.ip"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">确认</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-from-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Graph, Addon } from "@antv/x6";
import { register } from "@antv/x6-vue-shape";
import serverNode1 from "./serverNode1.vue";
import serverNode2 from "./serverNode2.vue";
import serverNode3 from "./serverNode3.vue";
import data from "./x6.js";
// import { getTopology, saveTopology } from "@/api/background";
import { GridLayout } from "@antv/layout";

register({
  shape: "server1",
  width: 100,
  height: 100,
  component: serverNode1,
});
register({
  shape: "server2",
  width: 100,
  height: 100,
  component: serverNode2,
});
register({
  shape: "server3",
  width: 100,
  height: 100,
  component: serverNode3,
});

export default {
  name: "X6Topo",
  data() {
    return {
      formData: {
        name: "",
        type: "",
        ip: "",
      },
      showInfo: false,
      nodeData: { ...data },
      graph: {},
      currentNode: "",
      stencil: {},
    };
  },
  methods: {
    banDefaultHotkey() {
      document.onselectstart = function () {
        return false;
      };
    },
    recoverDefaultHotkey() {
      document.onselectstart = function () {
        return true;
      };
    },
    showNodeData() {
      console.log(this.graph.toJSON());
    },
    onSubmit() {
      const cell = this.graph.getCellById(this.currentNode);
      console.log(cell);
      cell.data = this.formData;
    },
    // 左侧模板
    buildStencil() {
      this.stencil = new Addon.Stencil({
        target: this.graph,
        stencilGraphWidth: 280,
        // search: { rect: true },
        collapsable: true,
        groups: [
          {
            name: "basic",
            title: "基础节点",
            // 高度
            graphHeight: 180,
          },
          // {
          //   name: 'combination',
          //   title: '组合节点',
          //   // 布局选项
          //   layoutOptions: {
          //     // 每行几列
          //     columns: 1,
          //     // 左侧边距
          //     marginX: 60,
          //   },
          //   graphHeight: 260,
          // },
          // {
          //   name: 'group',
          //   title: '节点组',
          //   graphHeight: 100,
          //   layoutOptions: {
          //     columns: 1,
          //     marginX: 60,
          //   },
          // },
        ],
      });
      document.querySelector("#stencil")?.appendChild(this.stencil.container);
    },
    initGraph() {
      const graph = new Graph({
        container: document.getElementById("container"),
        // width: 800,
        // height: 600,
        autoResize: true,
        background: {
          color: "#F2F7FA",
        },
        grid: {
          visible: true,
          type: "doubleMesh",
          args: [
            {
              color: "#eee", // 主网格线颜色
              thickness: 1, // 主网格线宽度
            },
            {
              color: "#ddd", // 次网格线颜色
              thickness: 1, // 次网格线宽度
              factor: 4, // 主次网格线间隔
            },
          ],
        },
        connecting: {
          // connector: "smooth",
          allowBlank: false,
          allowNode: false,
        },
        panning: {
          enabled: true,
          eventTypes: "leftMouseDown",
        },
        mousewheel: true,
        clipboard: true,
        history: true,
        selecting: {
          enable: true,
          multiple: true,
          showNodeSelectionBox: true,
          multipleSelectionModifiers: ["ctrl", "meta"],
        },
        keyboard: true,
      });

      // graph.centerContent(); // 居中显示
      this.graph = graph;
      // this.convertData();
      // graph.fromJSON(this.nodeData); // 渲染元素
      this.useLayout(this.nodeData);
    },
    initEvents() {
      // 鼠标 Hover 时添加按钮
      this.graph.on("node:mouseenter", ({ node }) => {
        // node.addTools({
        //   name: "button",
        //   args: {
        //     markup: [
        //       {
        //         tagName: "circle",
        //         selector: "button",
        //         attrs: {
        //           r: 14,
        //           stroke: "#fe854f",
        //           "stroke-width": 3,
        //           fill: "white",
        //           cursor: "pointer",
        //         },
        //       },
        //       {
        //         tagName: "text",
        //         textContent: "link",
        //         selector: "icon",
        //         attrs: {
        //           fill: "#fe854f",
        //           "font-size": 8,
        //           "text-anchor": "middle",
        //           "pointer-events": "none",
        //           y: "0.3em",
        //         },
        //       },
        //     ],
        //     x: 0,
        //     y: 0,
        //     offset: { x: 18, y: 18 },
        //     onClick(e) {
        //       const { view } = e;
        //       console.log("start link!");
        //       console.log(e);
        //       // this.graph.addEdge({
        //       //   source:view.cell.id
        //       //   target:
        //       // })
        //     },
        //   },
        // });

        node.addTools({
          name: "button-remove",
          args: {
            x: "100%",
            y: 0,
            offset: { x: -10, y: 10 },
          },
        });
      });

      // 鼠标移开时删除按钮
      this.graph.on("node:mouseleave", ({ node }) => {
        node.removeTools(); // 删除所有的工具
      });

      // 点击节点添加信息表单
      this.graph.on("node:click", ({ e, cell, node }) => {
        this.currentNode = node.id;
        this.showInfo = true;
        this.formData = node.data;
        if (e.ctrlKey || e.metaKey) {
          this.graph.select(cell);
        } else {
          this.graph.resetSelection(cell);
        }
      });
      // 点击画布移除表单
      this.graph.on("blank:click", (e) => {
        this.showInfo = false;
      });
      this.graph.on("node:selected", ({ node }) => {
        console.log(node, "selected!!!");
      });
    },
    initSencil() {
      const server1 = this.graph.createNode({
        id: "node01",
        shape: "server1",
        width: 100,
        height: 100,
        data: {
          name: "",
        },
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
          },
          items: [
            {
              id: "port_3",
              group: "top",
            },
            {
              id: "port_4",
              group: "top",
            },
            {
              id: "port_5",
              group: "top",
            },
          ],
        },
      });
      const server2 = this.graph.createNode({
        id: "node02",
        shape: "server2",
        width: 100,
        height: 100,
        data: {
          name: "",
        },
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
          },
          items: [
            {
              id: "port_3",
              group: "top",
            },
            {
              id: "port_4",
              group: "top",
            },
            {
              id: "port_5",
              group: "top",
            },
          ],
        },
      });
      const server3 = this.graph.createNode({
        id: "node03",
        shape: "server3",
        width: 100,
        height: 100,
        data: {
          name: "",
        },
        ports: {
          groups: {
            top: {
              position: "top",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
            bottom: {
              position: "bottom",
              attrs: {
                circle: {
                  magnet: true,
                  stroke: "#8f8f8f",
                  r: 5,
                },
              },
            },
          },
          items: [
            {
              id: "port_3",
              group: "top",
            },
            {
              id: "port_4",
              group: "top",
            },
            {
              id: "port_5",
              group: "top",
            },
          ],
        },
      });
      // const server2 = new serverNode2
      // const server3 = new serverNode3
      this.stencil.load([server1, server2, server3], "basic");
    },
    async convertData() {
      const topologyList = await getTopology();
      topologyList.forEach((node) => {
        const { id, nodeid, position, shape, data } = node;
        const { x, y } = JSON.parse(position);
        this.graph.addNode({
          id: id,
          shape,
          x,
          y,
          data: data && JSON.parse(data),
          width: 100,
          height: 100,
          ports: {
            groups: {
              absolute: {
                position: "absolute",
                attrs: {
                  circle: {
                    magnet: true,
                    stroke: "#8f8f8f",
                    r: 5,
                  },
                },
                args: {
                  x: 0,
                  y: 0,
                },
              },
            },
            items: [
              {
                id: "p1",
                group: "absolute",
                args: {
                  x: 0,
                  y: 0,
                },
              },
              {
                id: "p2",
                group: "absolute",
                args: {
                  x: 0.5,
                  y: 0,
                },
              },
              {
                id: "p3",
                group: "absolute",
                args: {
                  x: "100%",
                  y: 0,
                },
              },
              {
                id: "p4",
                group: "absolute",
                args: {
                  x: 0,
                  y: "50%",
                },
              },
              {
                id: "p5",
                group: "absolute",
                args: {
                  x: 0,
                  y: "100%",
                },
              },
              {
                id: "p6",
                group: "absolute",
                args: {
                  x: "50%",
                  y: "100%",
                },
              },
              {
                id: "p7",
                group: "absolute",
                args: {
                  x: "100%",
                  y: "50%",
                },
              },
              {
                id: "p8",
                group: "absolute",
                args: {
                  x: "100%",
                  y: "100%",
                },
              },
            ],
          },
        });
      });
    },
    saveData() {
      const { cells } = this.graph.toJSON();
      // console.log(11111, cell);
      cells.forEach((node) => {
        const { id, position, shape } = node;
        console.log(JSON.stringify(position), 1111);
        // saveTopology({
        //   id,
        //   data: { id, position: JSON.stringify(position), shape },
        // });
      });
    },
    useLayout(originData) {
      // const { nodes } = originData
      const gridLayout = new GridLayout({
        type: "grid",
        // center: [300, 200],
        // width: nodes.length * 100,
        // height: nodes.length * 100,
        // sortBy: 'id',
        // rows: 3,
        cols: 10,
        preventOverlap: true,
        preventOverlapPadding: 150,
        nodeSize: 100,
      });
      const model = gridLayout.layout(originData);
      this.graph.fromJSON(model);
    },
    bindHotkey() {
      const graph = this.graph;
      graph.bindKey(["meta+c", "ctrl+c"], () => {
        const cells = graph.getSelectedCells();
        if (cells.length) {
          graph.copy(cells);
        }
        return false;
      });
      graph.bindKey(["meta+x", "ctrl+x"], () => {
        const cells = graph.getSelectedCells();
        if (cells.length) {
          graph.cut(cells);
        }
        return false;
      });
      graph.bindKey(["meta+v", "ctrl+v"], () => {
        if (!graph.isClipboardEmpty()) {
          const cells = graph.paste({ offset: 32 });
          graph.cleanSelection();
          graph.select(cells);
        }
        return false;
      });

      //undo redo
      graph.bindKey(["meta+z", "ctrl+z"], () => {
        if (graph.history.canUndo()) {
          graph.history.undo();
        }
        return false;
      });
      graph.bindKey(["meta+shift+z", "ctrl+shift+z"], () => {
        if (graph.history.canRedo()) {
          graph.history.redo();
        }
        return false;
      });

      // select all
      graph.bindKey(["meta+a", "ctrl+a"], () => {
        const nodes = graph.getNodes();
        if (nodes) {
          graph.select(nodes);
        }
      });

      //delete
      graph.bindKey("backspace", () => {
        const cells = graph.getSelectedCells();
        if (cells.length) {
          graph.removeCells(cells);
        }
      });

      // zoom
      graph.bindKey(["ctrl+1", "meta+1"], () => {
        const zoom = graph.zoom();
        if (zoom < 1.5) {
          graph.zoom(0.1);
        }
      });
      graph.bindKey(["ctrl+2", "meta+2"], () => {
        const zoom = graph.zoom();
        if (zoom > 0.5) {
          graph.zoom(-0.1);
        }
      });
    },
  },
  mounted() {
    this.initGraph();
    this.initEvents();
    this.bindHotkey();
    this.banDefaultHotkey()

    // 初始化左侧拖拽工具
    // this.buildStencil();
    // this.initSencil();

    // graph.enablePanning
  },
  beforeDestroy() {
    this.recoverDefaultHotkey()
  }
};
</script>

<style lang="less" scoped>
.flex {
  min-height: calc(100vh - 50px);
  display: flex;
  .left {
    flex: 1;
    #stencil {
      width: 280px;
      position: relative;
    }
  }

  .right {
    width: 250px;
    position: absolute;
    right: 0;
    min-height: calc(100vh - 50px);
    .el-form {
      min-height: calc(100vh - 50px);
    }
  }
}
.x6-root {
  // height: 100%;
  min-height: calc(100vh - 50px);
}
#nodeInfo {
  flex: 1;
  min-width: 200px;
  height: 100%;
  box-shadow: -1px 0 2px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background-color: white;
}
#container {
  flex: 1;
  min-height: calc(100vh - 50px);
}
</style>
