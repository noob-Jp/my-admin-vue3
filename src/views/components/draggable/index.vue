<template>
    <div>
        <el-card class="drag">
            <template #header>
                <div class="card-header">
                    <span>拖拽组件，采用开源的
                        <a href="https://sortablejs.github.io/vue.draggable.next/#/simple" target="_blank">
                            vuedraggable
                        </a>
                    </span>
                </div>
            </template>
            <div class="drag_container">
                <el-row :gutter="20">
                    <el-col :xl="25" :sm="8" :md="8" :lg="8">
                        <el-card>
                            <template #header>
                                <div class="card-header">
                                    grid列表拖拽
                                </div>
                            </template>
                            <draggable class="grid-container" v-model="gridLists" item-key="grid" chosenClass="chosen"
                                forceFallback="true" animation="300">
                                <template #item="{ element }">
                                    <div :class="'item' + ' ' + 'item-' + element.num">{{ element.num }}</div>
                                </template>
                            </draggable>
                        </el-card>
                    </el-col>

                    <el-col :xl="25" :sm="8" :md="8" :lg="8">
                        <el-card>
                            <template #header>
                                <div class="card-header">
                                    左侧列表
                                </div>
                            </template>
                            <draggable class="list-group" :list="ListLeft" group="people" @change="log" itemKey="name" animation="300">
                                <template #item="{ element, index }">
                                    <div class="list-group-item">{{ element.name }} {{ index }}</div>
                                </template>
                            </draggable>
                        </el-card>
                    </el-col>

                    <el-col :xl="25" :sm="8" :md="8" :lg="8">
                        <el-card>
                            <template #header>
                                <div class="card-header">
                                    右侧列表
                                </div>
                            </template>
                            <draggable class="list-group" :list="ListRight" group="people" @change="log" itemKey="name" animation="300">
                                <template #item="{ element, index }">
                                    <div class="list-group-item">{{ element.name }} {{ element.id }}</div>
                                </template>
                            </draggable>
                        </el-card>
                    </el-col>
                </el-row>

            </div>
        </el-card>
    </div>
</template>
    
<script setup>
import { ref } from 'vue'
//引入vuedraggable拖拽组件
import draggable from "vuedraggable/src/vuedraggable";
let gridLists = ref([
    { grid: "cn", num: 1 },
    { grid: "cn", num: 2 },
    { grid: "cn", num: 3 },
    { grid: "cn", num: 4 },
    { grid: "cn", num: 5 },
    { grid: "cn", num: 6 },
    { grid: "cn", num: 7 },
    { grid: "cn", num: 8 },
    { grid: "cn", num: 9 }
]);

let ListLeft = ref([
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 }
]);

let ListRight = ref([
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 }
]);

const add = () => [
    this.list.push({ name: "Juan" })
]
const replace = () => {
    this.list = [{ name: "Edgard" }]
}

const clone = () => {
    return {
        name: el.name + " cloned"
    }
}
const log = (evt) => {
    // window.console.log(evt);
}


</script>
    
<style lang="scss" scoped>
.drag {
    height: calc(100vh - 90px);
    overflow: hidden;
}

.card-header {
    a {
        &:hover {
            color: rgb(15, 118, 202);
        }
    }
}

.grid-container {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-rows: 33.3% 33.3% 33.3%;
}

.item {
    height: 100px;
    font-size: 2em;
    text-align: center;
    line-height: 100px;
    border: 1px solid #e5e4e9;
    cursor: move;

    @media screen and (max-width: 750px) {
        line-height: 90px;
    }
}

.item-1 {
    background-color: #ef342a;
}

.item-2 {
    background-color: #f68f26;
}

.item-3 {
    background-color: #4ba946;
}

.item-4 {
    background-color: #0376c2;
}

.item-5 {
    background-color: #c077af;
}

.item-6 {
    background-color: #f8d29d;
}

.item-7 {
    background-color: #b5a87f;
}

.item-8 {
    background-color: #d0e4a9;
}

.item-9 {
    background-color: #4dc7ec;
}

.chosen {
    border: solid 2px #3089dc !important;
}

.list-group-item{
    height: 70px;
    border: 1px solid #c5c5c5;
    text-align: center;
    line-height: 70px;
    cursor: move;
}
</style>