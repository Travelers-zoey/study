<template>
  <div id="myComponent">
    <el-row :gutter="10">
      <el-col :span="24" type="flex" justify="center" style="color: pink; margin-bottom: 50px;">
        <span>你好</span>
        <slot :user="user">徐珂</slot>
        <slot name="footer" :aaa="hello">111</slot>
      </el-col>
    </el-row>    
    <el-row :gutter="10">
      <el-col :span="4">
        <el-button type="primary" @click="show = !show">内置过渡动画</el-button>
      </el-col>
      <el-col :span="6">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
      </el-col>
      <el-col :span="6">
        <transition name="el-zoom-in-center">
          <div v-show="show" class="transition-box">.el-zoom-in-center</div>
        </transition>
      </el-col>
      <el-col :span="6">
        <el-collapse-transition>
          <div v-show="show" class="transition-box">.el-collapse</div>
        </el-collapse-transition>
      </el-col>
    </el-row>    
    <el-container>
      <el-header height="70px">Header</el-header>
      <el-container>
        <el-aside width="250px">Aside</el-aside>
        <el-container>
          <el-main >Main</el-main>
          <el-footer height="80px">Footer</el-footer>
        </el-container>
      </el-container>      
    </el-container>
    <!-- <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container> -->
    <el-row :gutter="10">
      <el-col :span="14" style="margin: 20px 0">
        <el-button type="primary" :loading="true" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" :icon="icon?'el-icon-video-play':'el-icon-video-pause'" @click="icon = !icon" style="font-size: 20px" circle></el-button>
        <el-button type="primary" plain>朴素按钮plain</el-button>
        <el-button type="primary" round>圆角按钮round</el-button>
        <el-button type="primary" disabled>禁用disabled</el-button>
        <el-button type="text">无边框背景色text</el-button>
      </el-col>
      <el-col :span="6" style="margin:20px 0">        
        <el-button-group>    
          <el-button type="text">按钮组：</el-button>      
          <el-button type="primary" size="small" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </el-col>
      <el-col :span="4">
        <div class="transition-box shadow-test">阴影</div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" disabled>链接el-link</el-link>
      </el-col>      
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" type="primary">primary</el-link>
      </el-col>
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" type="success">success</el-link>
      </el-col>
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" type="warning">warning</el-link>
      </el-col>
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" type="info">info</el-link>
      </el-col>
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" type="danger">danger</el-link>
      </el-col>
      <el-col :span="2">
        <el-link href="http://www.baidu.com" target="_blank" :underline="false" type="primary">无下划线</el-link>
      </el-col>
      <el-col :span="2">
        <el-link type="primary" icon="el-icon-edit">编辑</el-link>
      </el-col>
      <el-col :span="2">
        <el-link type="primary">查看<i class="el-icon-view el-icon--right"></i></el-link>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="8">
        <span>单选框radio：</span>
        <el-radio v-model="radio" label=1>选项1</el-radio>
        <el-radio v-model="radio" label=2>选项2</el-radio>
        <el-radio v-model="radio" label=3 :disabled="true" border size="mini">选中且禁用</el-radio>
      </el-col>
      <el-col :span="8">
        <el-radio-group v-model="model" @change="changeCity">
          <el-radio-button label="成都">成都</el-radio-button>
          <el-radio-button label="北京">北京</el-radio-button>
          <el-radio-button label="深圳">深圳</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="6">
        <span>多选框：</span>
        <el-checkbox v-model="checked1">单一选项</el-checkbox>
        <el-checkbox v-model="checked2" disabled>单一选项</el-checkbox>
      </el-col>
      <el-col :span="10">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="西兰花" key="1">西兰花</el-checkbox>
          <el-checkbox label="火锅" key="2" disabled>火锅</el-checkbox>
          <el-checkbox label="奶茶" key="3" disabled>奶茶</el-checkbox>
          <el-checkbox label="鸡胸肉" key="4">鸡胸肉</el-checkbox>
          <el-checkbox label="干锅兔" key="5">干锅兔</el-checkbox>
        </el-checkbox-group>       
      </el-col>
      <el-col :span="10">
        <el-checkbox v-model="checkAll" :indeterminate="isInterminate" @change="checkedAll">全选</el-checkbox>
        <el-checkbox-group v-model="checkedAllList" @change="changeAllList" :min="1" :max="3">
          <el-checkbox label="深圳" key="1">深圳</el-checkbox>
          <el-checkbox label="成都" key="2" disabled>成都</el-checkbox>
          <el-checkbox label="长沙" key="3" disabled>长沙</el-checkbox>
          <el-checkbox label="长春" key="4">长春</el-checkbox>
        </el-checkbox-group>       
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="3">
        <span>input输入框：</span>
      </el-col>
      <el-col :span="4">        
        <el-input v-model="input1" placeholder="v-model为input" clearable show-password></el-input>
      </el-col>
      <el-col :span="4">        
        <el-input v-model="input2" disabled placeholder="禁用状态"></el-input>
      </el-col>
      <el-col :span="4">        
        <el-input v-model="input3" placeholder="请选择日期suffix-icon" suffix-icon="el-icon-date"></el-input>
      </el-col>
      <el-col :span="4">        
        <el-input v-model="input4" placeholder="请输入内容prefix-icon" prefix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input5" placeholder="使用i标签?暂时有问题">
          <template #prefix>
             <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>   
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="8">
        <el-input v-model="textarea" type="textarea" :rows="3" placeholder=""></el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input6" placeholder="复合型输入框">
          <template #prepend>Http://</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input7" placeholder="搜索" size="small">
          <template #append>
            <el-button><i class="el-icon-search"></i></el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-autocomplete v-model="autoValue" placeholder="请选择食物：带建议" :fetch-suggestions="querySearch" @select="handleSelect"
          :trigger-on-focus="false"
          popper-class="my-autocomplete">
        </el-autocomplete>
      </el-col>
      <el-col :span="8">
        <el-autocomplete v-model="autoValue" placeholder="点击即激活，改不了样式?" 
          :fetch-suggestions="querySearch" @select="handleSelect"
          popper-class="my-autocomplete">
          <template #default="{ item }">
            <div class="name">{{ item.value }}</div>
            <span class="id">{{ item.id }}</span>
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="8">
        <el-input v-model="input8" placeholder="限制字数，统计字数" maxlength="100" minlength="10" show-word-limit></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="4">
        <el-input-number v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="2" step-strictly></el-input-number>
      </el-col>
      <el-col :span="4">
        <el-input-number v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="0.02" :precision="2"></el-input-number>
      </el-col>
      <el-col :span="4">
        <el-input-number size="medium" v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="0.02" :precision="2"></el-input-number>
      </el-col>
      <el-col :span="4">
        <el-input-number size="small" v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="0.02" :precision="2"></el-input-number>
      </el-col>
      <el-col :span="4">
        <el-input-number size="mini" v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="0.02" :precision="2"></el-input-number>
      </el-col>
      <el-col :span="4">
        <el-input-number controls-position="right" v-model="num" @change="inputChange" :min="1" :max="10" label="label" :step="0.02" :precision="2"></el-input-number>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="6">
        <el-select v-model="selectValue" filterable clearable 
          placeholder="请选择食物"
          @change="changeSelect">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.label"
            :value="item.id"
            :disabled="item.disabled">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.id }}</span>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="selectValue" clearable placeholder="请选择城市">
          <el-option-group
            v-for="city in cities"
            :key="city.id"
            :label="city.label">
            <el-option
              v-for="item in city.options"
              :key="item.id"
              :label="item.label"
              :value="item.id"
              :disabled="item.disabled">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.id }}</span>
            </el-option>
          </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-cascader        
          :options="cascaderoptions"
          v-model="cascaderValue"
          @change="cascaderChange"
          clearable
          :show-all-levels="false"      
          filterable  
          placeholder="请选择"
          :props="{expandTrigger: 'hover', disabled: 'forbidden', multiple: 'true', checkStrictly: 'true'}">
            <template #default="{node, data}">
              <span>{{data.label}}</span>
              <span v-if="!node.isLeaf">({{data.children.length}})</span>
            </template>
        </el-cascader>  
      </el-col>      
    </el-row>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-cascader-panel
        :options="cascaderoptions"
        v-model="cascaderValue"
        @change="cascaderChange"
        clearable
        filterable  
        placeholder="请选择级联面板"
        :props="{expandTrigger: 'hover', disabled: 'forbidden', multiple: 'true', checkStrictly: 'true'}">
      </el-cascader-panel>
      <el-col :span="6">
        <el-slider v-model="sliderValue1" vertical height="200px"></el-slider>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-switch v-model="switchValue" 
          active-text="active-text"
          inactive-text="inactive-text"
          active-value="active"
          inactive-value="inactive"
          @change="switchChange">
        </el-switch>
      </el-col>
      <el-col :span="10">
        <el-slider v-model="sliderValue1" @change="sliderChange" :step="10" :marks="marks" show-stops show-input></el-slider>
      </el-col>
      <el-col :span="4">
        <el-slider v-model="sliderValue2" :show-tooltip="true" range :max="70" :min="10"></el-slider>
      </el-col>
      <el-col :span="4">
        <el-slider v-model="sliderValue3" :format-tooltip="formatTooltip"></el-slider>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="nav">
      <el-col :span="6">
        <el-time-select
          v-model="timeSelect"
          :picker-options="{start: '10:30',step: '00:15',end: '18:30'}"
          placeholder="start end 属性设置无效">
        </el-time-select>
      </el-col>
      <el-col :span="6">
        <el-time-picker
          v-model="timePiker"
          :picker-options="{ selectableRange: '07:30:00 - 20:30:00' }"
          placeholder="请选择时间范围">
        </el-time-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timePiker: '',
      timeSelect: '',
      // 展示标记
      marks: {
        0: '开始',
        50: '一半',
        70: {
          style: {
            color: '#1989FA'
          },
          label: '70%'
        },
        100: '终点',                    
      },
      sliderValue1: 10,
      sliderValue2: [20, 30],
      sliderValue3: 30,
      switchValue: true,
      cascaderoptions: [
        {
          value: 'zhinan',
          label: '指南',
          forbidden: true,  //props.disabled指定forbidden的值为是否禁用
          children: [
            {value: 'shejiyuanze', label: '设计原则', children: [{value: 'yizhi', label: '一致'}]},
            {value: 'daohang', label: '导航', children: [{value: 'cexiangdaohang', label: '侧向导航'}]},
          ]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {value: 'basic', label: 'Basic', children: [{value: 'layout', label: '布局'}]},
            {value: 'form', label: 'Form', children: [{value: 'radio', label: 'Radio单选框'}]},
          ]
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {value: 'axure', label: 'Axure Components'},
            {value: 'jiaohu', label: '组件交互文档', children: [{value: 'sketch', label: 'Sketch Templates'}]},
          ]
        },
      ],
      cascaderValue: '',
      selectValue: '',
      cities: [
        {
          label: '热门城市',
          options: [
            {label: '成都', id: 1},
            {label: '深圳', id: 2},
            {label: '长沙', id: 3},
            {label: '大连', id: 4},
          ]
        },
        {
          label: '城市名',
          options: [
            {label: '阿坝', id: 1},
            {label: '北京', id: 2},
            {label: '长春', id: 3},
            {label: '大同', id: 4},
            {label: '鄂尔多斯', id: 5},
            {label: '太原', id: 6},
          ]
        },
      ],
      options: [
        {label: '绿豆糕', id: 1},
        {label: '西兰花', id: 2, disabled: true},
        {label: '鸡胸肉', id: 3},
        {label: '干锅兔', id: 4},
      ],
      num: 5,
      user: {
        firstName: "张",
        lastName: "月珂",
      },
      hello: {
        key: 1,
        value: ",遇见更好的自己",
      },
      show: true,
      icon: true,
      radio: '3',
      model: '成都',
      checked1: true,
      checked2: false,
      checkList:['西兰花', '鸡胸肉',],
      checkedAllList: ['成都', '长沙'],
      allOptions: ['深圳', '成都', '长沙', '长春'],
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      textarea: '文本域',
      autoValue: '',
      foods: [
        {value: '香蕉', name: "香蕉", id: 'banala'},
        {value: '111', name: "苹果", id: 'apple'},
        {value: '火锅', name: "火锅", id: 'hotpot'},
        {value: '鸡肉', name: "鸡肉", id: 'chicken'},
        {value: '樱桃', name: "樱桃", id: 'cherry'},
        {value: '可乐', name: "可乐", id: 'cola'},
      ],
    };
  },
  created() {
    console.log(this.sliderValue1, 'sliderValue1');
    console.log(this.marks['50'], 'marks');
  },
  methods: {
    changeCity(item) {
      console.log(item, 'label值，即为v-modle值');
    },
    checkedAll(val) {
      this.checkedAllList = val ? this.allOptions : [];
      this.isInterminate = false;
    },
    changeAllList(val) {
      console.log(val, '将全选checkAll和isInterminate设为计算属性');
    },
    //一个回调函数
    querySearch(queryString, cb) {
      var results = queryString ? this.foods.filter(this.createFilter(queryString)) : this.foods;
      cb(results);
    },
    createFilter(queryString) {
      return (item) => {
        return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1)
      }
    },
    // 输入建议选择
    handleSelect(item) {
      console.log(item, 'handleSelect 选中的值：对象');
      console.log(this.autoValue, 'this.autoValue');
    },
    // 计数器
    inputChange(value) {
      console.log(value, '计数器');
    },
    // select事件change
    changeSelect(value) {
      console.log(value, 'el-select change事件');
    },
    // cascader事件：change
    cascaderChange(value) {
      console.log(value, 'el-cascader change事件');
    },
    // switch事件：change
    switchChange(value) {
      console.log(value, 'el-switch change事件');
    },
    // 滑块文字提示格式化
    formatTooltip(value) {
      return value/100;
    },
    // slider事件：change
    sliderChange(value) {
      console.log(value, 'el-slider change事件');
    },
  },
  computed: {
    isInterminate() {
      return this.checkedAllList.length > 0 && this.checkedAllList.length < this.allOptions.length?true:false
    },
    checkAll() {
      return this.checkedAllList.length === this.allOptions.length ? true: false;
    }
  }
};
</script>

<style lang="less">
#myComponent {
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #464545;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  .shadow-test {
    margin: 20px 0;
    background: pink;
    box-shadow: 20px -10px 5px 5px rgb(245, 230, 233);
  }

  .nav {
    margin: 20px 0;
  }
  /deep/ .my-autocomplete {
    color: red;
    height: 500px;
  }
  /deep/ .el-autocomplete-suggestion li{
    display: flex;
    justify-content: space-around;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    // line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    // line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    // height:300px
  }
}
</style>
