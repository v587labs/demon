<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="开仓价格">
            <el-input-number v-model="formInline.open" type="number" placeholder="开仓价格" clearable />
        </el-form-item>


        <el-form-item label="成本">
            <el-input-number v-model="formInline.cost"
            
    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            type="number" placeholder="成本" clearable />
        </el-form-item>

        <el-form-item label="倍率">
            <el-input-number v-model="formInline.rate" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item label="加仓率">
            <el-input-number v-model="formInline.addRate" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item label="加仓成本">
            <el-input-number v-model="formInline.addCost" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item label="加仓次数">
            <el-input-number v-model="formInline.addNum" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">计算</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
    open: '',
    cost: '',
    rate: 5,
    addRate: 0.01,
    addCost: '',
    addNum: 10,

})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>