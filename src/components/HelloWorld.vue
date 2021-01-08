<template>
  <div class="hello">
    <div class = "navbar navbar-inverse navbar-fixed-bottom noPrint" role="navigation">
      <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href = "https://g0v.hackpad.com/JqRmqeNceAT" target = "_blank">討論紀錄</a></li>
              <li>
                <a href="https://github.com/g0v/reporter">code on Github</a>
              </li>
            </ul>
        </div>
    </div>

    <table id = "main" border = "3px">
      <tr>
        <td>

      <div id = "titleBar">
<!--        <span>記者證</span>  -->

        <span><img src="images/r2.png"></span>
      </div>

    <!--  <div id = "redBar">
      </div>  -->

      <table id ="in">
        <tr>
          <td id ="left">
                <img class = "face" :src = "root.photo" v-show = "root.photo" @click = "root.photo = ''" />
                <span v-show = "!root.photo">

                  <ol>
                    <li>「貼」照片 
                    <li>「印」記者證
                    <li>「前」往現場
                  </ol>

                  <hr>
                    <span style ="font-size:22px;">請上傳一張照片：</span>
                  <input id = "photo" type="file" fileread="root.photo" accept="image/*" capture="camera" id="file-upload" />

                </span>
            </div>
          </td>

          <td id = "right">

            <span v-show = "root.name  && !editing"> {{ root.name}}
            </span>

            <span v-show = "!root.name || editing">
              請輸入您的名字：<input v-model = "root.name" ng-focus = "editing = 1" @keypress = "maybeDone($event)">
            </span>

          </td>
        </tr>
      </table>

    </div>

    <br><br>

    <span id = "foot">
        公民攝影記者
    </span>      

    </td>

    <td id = "r">

      <span id = "rt">憲法保障公民記者採訪自由</span>

      <br><br>

      司法院釋字第 613 號：
      憲法第十一條所保障之言論自由，其內容包括通訊傳播自由，亦即經營或使用廣播、電視與其他通訊傳播網路等設施，以取得資訊及發表言論之自由。

      <br><br>

      司法院釋字第 689 號：
      新聞自由所保障之新聞採訪自由並非僅保障隸屬於新聞機構之新聞記者之採訪行為，亦保障一般人為提供具新聞價值之資訊於眾，或為促進公共事務討論以監督政府，而從事之新聞採訪行為。

      <br><br>


        <a href = "http://www.judicial.gov.tw/constitutionalcourt/p03_01.asp?expno=689"><img class = "qr" src="http://chart.apis.google.com/chart?chs=200x200&amp;cht=qr&amp;chld=|1&amp;chl=http://www.judicial.gov.tw/constitutionalcourt/p03_01.asp?expno=689" target="_blank" rel="noopener noreferrer"></a>

        大法官解釋全文<br>
        http://goo.gl/Rd1hXR

        </td>
    <a id = "doPrint" ng-show ="root.photo && root.name &&!editing" onclick = "$(this).hide(); window.print()"> 列印!  </a>
  </table>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    editing: 1,
    root: {
      photo: '',
      name: ''
    }
  },
  methods: {
    maybeDone (e) {
      if (e.keyCode == 13) this.editing = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
