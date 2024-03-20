<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="开仓价格">
            <el-input-number v-model="formInline.open" type="number" :step="10" placeholder="开仓价格" clearable />
        </el-form-item>


        <el-form-item label="成本">
            <el-input-number v-model="formInline.cost" type="number" placeholder="成本" :step="10" clearable />
        </el-form-item>

        <el-form-item label="倍率">
            <el-input-number v-model="formInline.rate" :min="1" :max="100" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item label="加仓率">
            <el-input-number v-model="formInline.addRate" :min="-1" :max="1" :step="0.01" type="number" placeholder="倍率"
                clearable />
        </el-form-item>

        <el-form-item label="加仓成本">
            <el-input-number v-model="formInline.addCost" :step="10" type="number" placeholder="倍率" clearable />
        </el-form-item>

        <el-form-item label="加仓次数">
            <el-input-number v-model="formInline.addNum" type="number" placeholder="倍率" clearable />
        </el-form-item>
        <div></div>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">计算</el-button>
        </el-form-item>
    </el-form>

    <el-card v-for="(item, index) in listRef" mb-10px style="max-width: 480px">
        <template #header>
            <div class="card-header">
                <span>{{ index == 0 ? '成本' : '加仓 ' + index }}</span>
            </div>
        </template>

        <el-row>
            <el-text tag="b">价格：</el-text>
            <el-text>{{ item.addPrice }}</el-text>
        </el-row>

        <el-row>
            <el-text tag="b">均价：</el-text>
            <el-text>{{ item.price }}</el-text>
        </el-row>

        <el-row>
            <el-text tag="b">成本：</el-text>
            <el-text>{{ formInline.addCost }} / {{ item.cost }}</el-text>
        </el-row>

        <template #footer>
            收益： <el-text v-if="item.profit < 0" class="mx-1" type="danger">{{ item.profit }} (-{{ item.profitRate }}
                %)</el-text>
            <el-text v-else-if="item.profit == 0" class="mx-1">{{ item.profit }}</el-text>
            <el-text v-else class="mx-1">{{ item.profit }} ({{ item.profitRate }} %)</el-text>

        </template>
    </el-card>
</template>

<script lang="ts" setup>

import { reactive } from 'vue'

useHead({
    title: '合约成本计算器',
    //   meta: [
    //     { name: 'description', content: 'My amazing site.' }
    //   ],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const formInline = reactive({
    open: 0,
    cost: 0,
    rate: 5,
    addRate: -0.01,
    addCost: 10,
    addNum: 10,

});

const listRef = ref([]);

const onSubmit = () => {

    let list = [];

    for (let i = 0; i < formInline.addNum + 1; i++) {
        console.log(i)

        if (i == 0) {
            list.push({
                "price": formInline.open,
                "num": formInline.cost / formInline.open,
                "cost": formInline.cost,
                "profit": 0,
                "profitRate": 0,
            })
        } else {
            let last = list[i - 1];
            let price = last.price * (1 + formInline.addRate * i);
            let cost = formInline.addCost;
            let num = cost / price;
            let nowCost = last.cost + cost;
            let nowNum = num + last.num;
            let nowPrice = nowCost / nowNum;
            let nowProfit = (nowPrice - last.price) * formInline.rate * nowNum;

            list.push({
                "addPrice": price,
                "price": nowPrice,
                "num": nowNum,
                "cost": nowCost,
                "profit": nowProfit,
                "profitRate": (1 - (nowCost + nowProfit) / nowCost) * 100,
            })
        }



    }

    listRef.value = list;
    console.log(list);
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