<template>
    <div h-full text-center flex select-none all:transition-400 clear-inherit>
        <el-affix :offset="120">
    <el-button type="primary">Offset top 120px</el-button>
  </el-affix>
        <div ma>
            <el-container>
                <el-main>


                    <div class="text-red-500">This should be red.</div>

                    <div class="p-4 text-lg text-blue-500 hover:text-blue-700">
                        Hello, UnoCSS!
                    </div>
                    <div>
                        <el-button>dd</el-button>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>


<style></style>