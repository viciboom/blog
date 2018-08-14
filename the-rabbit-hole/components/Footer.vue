<template>
  <div>
  	<el-row type="flex" justify="center">
  		<el-col :span="24" class="footer">
			<div>© 2018 TsukiKujirai. ALL RIGHTS RESERVED.</div>
  		</el-col>
  	</el-row>
  </div>
</template>

<style lang="less">
	.footer {
		display:flex;
		justify-content:center;
		align-items:center;
    height:60px;
    line-height:60px;
    text-align:center;
		background:#2d2d34;
		color: #fff;
		columns: #fff;
		@media (max-width: 768px) {
			font-size: 13px;
		}
	}
</style>
