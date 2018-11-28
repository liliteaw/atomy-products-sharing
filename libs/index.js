/**
 * Docsify config
 */
gitalkConfig = {
  clientID: 'e09a2c6d27d93cbdee8c',
  clientSecret: '937463f69ac7c36097078af7a01c83bbae246337',
  repo: 'atomy-products-sharing',
  owner: 'liliteaw',
  admin: ['liliteaw'],
  distractionFreeMode: false
},
window.$docsify = {
  name: 'Atomy Products Sharing',
  repo: 'https://liliteaw.github.io/atomy-products-sharing/#/',
  auto2top: true,
  loadSidebar: true,
  subMaxLevel: 2,
  homepage: 'README.md',
  ga: 'UA-122081516-1',
  search: {
    noData: {
      '/': '找不到结果!'
    },
    paths: 'auto',
    placeholder: {
      '/': '搜索'
    }
  },
  plugins: [
    function(hook, vm) {
    

      hook.doneEach(function(){
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split('/').join('');
        domObj = Docsify.dom;
        main = domObj.getNode("#main");

        /**
         * render gittalk
         */
        Array.apply(null,document.querySelectorAll("div.gitalk-container")).forEach(function(ele){ele.remove()});
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);
        gitalk = new Gitalk(Object.assign(gitalkConfig, {id: !label ? "home" : label}))
        gitalk.render('gitalk-container-' + label)
      })
    }
  ]
}