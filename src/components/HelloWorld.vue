<template>
  <div class="hello">
    <div class = "navbar navbar-inverse navbar-fixed-bottom noPrint" role="navigation">
      <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><a href = "https://g0v.hackpad.com/JqRmqeNceAT" target = "_blank" rel="noopener noreferrer">討論紀錄</a></li>
              <li>
                <a href="https://github.com/g0v/reporter"  target = "_blank" rel="noopener noreferrer">code on Github</a>
              </li>
            </ul>
        </div>
    </div>

    <table id = "main" border = "3px">
      <tr>
        <td>
          <div id = "titleBar">
    <!--        <span>記者證</span>  -->
            <span><img src="https://g0v.github.io/reporter/images/r2.png" alt="logo"></span>
          </div>
        </td>
        <td>
          <h3 id = "rt">憲法保障公民記者採訪自由</h3>
        </td>
      </tr>
      <tr>
      <!--  <div id = "redBar">
        </div>  -->
        <td>
          <table id ="in">
            <tr>
              <td id ="left">
                    
                    <img class = "face" :src = "root.photo" v-show = "root.photo" @click = "root.photo = ''" alt="face"/>

                    <span v-show = "!root.photo">

                      <ol>
                        <li>「貼」照片</li>
                        <li>「印」記者證</li>
                        <li>「前」往現場</li>
                      </ol>

                      <hr>
                        <span style ="font-size:22px;">請上傳一張照片：</span>
                        
                          <image-uploader @input="setImage"></image-uploader>

                      </span>
              </td>
            </tr>
            <tr>
              <td id = "right">
                <span id="name" v-show = "root.name  && !editing"> {{ root.name}}
                </span>
                <span v-show = "!root.name || editing">
                  請輸入您的名字：<input v-model = "root.name" @focus = "editing = 1" @keypress = "maybeDone($event)">
                </span>

              </td>
            </tr>
          </table> <!-- in END -->
          <br><br>
          <h3 id = "foot">
              公民攝影記者
          </h3>      
        </td>
        <td id = "r">

          司法院釋字第 613 號：
          憲法第十一條所保障之言論自由，其內容包括通訊傳播自由，亦即經營或使用廣播、電視與其他通訊傳播網路等設施，以取得資訊及發表言論之自由。

          <br><br>

          司法院釋字第 689 號：
          新聞自由所保障之新聞採訪自由並非僅保障隸屬於新聞機構之新聞記者之採訪行為，亦保障一般人為提供具新聞價值之資訊於眾，或為促進公共事務討論以監督政府，而從事之新聞採訪行為。

          <br><br>
              <a href = "https://cons.judicial.gov.tw/docdata.aspx?fid=100&id=310870&rn=20084">
              <img class = "qr" src="https://chart.apis.google.com/chart?chs=200x200&amp;cht=qr&amp;chld=|1&amp;chl=https://cons.judicial.gov.tw/docdata.aspx?fid=100%26id=310870%26rn=20084" target="_blank" rel="noopener noreferrer" alt="qr"></a>

              <br>

              大法官解釋全文<br>
              https://gov.tw/KKt
        </td>
      </tr>
    </table>
    <a id = "doPrint" class="noPrint" v-show ="root.photo && root.name" onclick = " window.print()"> 列印!  </a>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      editing: 1,
      hasImage: false,
      root: {
        photo: '',
        name: ''
      }
    }
  },
  methods: {
    setImage: function (file) {
      this.hasImage = true
      this.root.photo = file
    },
    maybeDone (e) {
      if (e.keyCode == 13) this.editing = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table#main {
  border: 3px solid black;
  width: 720px;
  border-collapse: collapse;
}

input {
  font-size: 22px;
}

table#main tr td {
  width: 50%;
  border: none;
}

ol, li {
  list-style-type: decimal !important;
}

table {
  border: none;
  border-collapse: collapse;
}

td#r {
  text-align: left;
}

h3 {
  margin: 40px 0 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.navbar-fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
}

.face {
  width: 300px;
}

#name {
  font-size: 22px;
  font-weight: bolder;
}

#doPrint {
  position: fixed;
  top: 33vh;
  left: 33vw;
  width: 33vw;
  padding: 5px;
  border-radius: 15px;
  background-color: rgba(0,255,0,0.6);
  font-size: 48px;
  color: black;
}

</style>
