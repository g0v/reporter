<template>
  <div class="hello">
    <div class = "navbar navbar-inverse navbar-fixed-bottom noPrint" role="navigation">
      <div class="navbar-container">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://g0v.github.io/reporter/#/" target="_blank" rel="noopener noreferrer">
              分享到 Facebook
            </a>
          </li>
          <li class="nav-item">
            <a href="https://line.me/R/msg/text/?https://g0v.github.io/reporter/#/" target="_blank" rel="noopener noreferrer">
              分享到 Line
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/g0v/reporter/wiki/%E9%9A%B1%E7%A7%81%E6%AC%8A%E6%94%BF%E7%AD%96" target="_blank" rel="noopener noreferrer">
              隱私政策
            </a>
          </li>
          <li class="nav-item">
            <a href="https://github.com/g0v/reporter" target="_blank" rel="noopener noreferrer">
              專案原始碼
            </a>
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

                    <h2 v-show = "!root.photo">每位公民都有新聞採訪權</h2>
                    <span v-show = "!root.photo">

                      <ol>
                        <li>「貼」照片</li>
                        <li>「印」記者證</li>
                        <li>「前」往現場採訪</li>
                      </ol>

                      <span class = "note left-align">
                        記者證是公民新聞採訪權的保障。
                        <br>
                        上傳照片、輸入名字後，即可列印，請妥善保存，並在採訪時隨身攜帶。
                      </span>

                      <hr>
                        <span style ="font-size:22px;">請上傳一張照片：</span>
                        
                          <image-uploader @input="setImage"></image-uploader>

                    </span>
              </td>
            </tr>
            <tr>
              <td id = "right">
                <span>
                  <span class = "noPrint">請輸入您的名字：</span>
                  <input v-model = "root.name" @focus = "editing = 1" @keypress = "maybeDone($event)">
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
                <img class = "qr" src="../assets/qr-code.png" alt="qr"/>
              </a>
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
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  padding: 10px 0;
}

.navbar-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.nav-item {
  margin: 5px;
}

.nav-item a {
  color: #42b983;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: rgba(66, 185, 131, 0.1);
  font-size: 14px;
  white-space: nowrap;
}

.nav-item a:hover {
  background-color: rgba(66, 185, 131, 0.2);
}

@media (max-width: 768px) {
  .nav-list {
    gap: 8px;
  }
  
  .nav-item a {
    padding: 6px 10px;
    font-size: 13px;
  }
}

.face {
  width: 200px;
  border-radius: 15px;
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

.qr {
  width: 180px;
  height: 180px;
  display: block;
  margin: 0 auto;
}

@media print {
  input {
    border: none;
    text-align: center;
  }
}

</style>
