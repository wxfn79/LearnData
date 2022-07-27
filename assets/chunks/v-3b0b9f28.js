"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7445],{7714:(e,s,a)=>{a.r(s),a.d(s,{data:()=>n});const n=JSON.parse('{"key":"v-3b0b9f28","path":"/web/VuePress.html","title":"VuePress","lang":"zh-CN","frontmatter":{"article":false,"title":"VuePress","order":1,"summary":"VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。 如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能转为 VuePress。不过，VuePress 网站需要依赖包环境，生成的静态文件在本","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/VuePress.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"VuePress"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-27T15:48:56.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-27T15:48:56.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"插件","slug":"插件","children":[]},{"level":2,"title":"初始配置","slug":"初始配置","children":[]},{"level":2,"title":"减少文件变动","slug":"减少文件变动","children":[]},{"level":2,"title":"更换打包工具","slug":"更换打包工具","children":[]},{"level":2,"title":"关闭 prefetch","slug":"关闭-prefetch","children":[]},{"level":2,"title":"自定义主题","slug":"自定义主题","children":[]}],"git":{"createdTime":1658511538000,"updatedTime":1658936936000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":24}]},"readingTime":{"minutes":6.97,"words":2090},"filePathRelative":"web/VuePress.md","localizedDate":"2022年7月22日"}')},880:(e,s,a)=>{a.r(s),a.d(s,{default:()=>os});var n=a(8e3);const t={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},l=(0,n.Uk)("VuePress"),i=(0,n.Uk)(" 是一个以 Markdown 为中心的静态网站生成器。你可以使用 Markdown 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。"),c=(0,n._)("p",null,"如果你已经有了 docsify/Hexo 等 Markdown 架构网站，简单就能转为 VuePress。不过，VuePress 网站需要依赖包环境，生成的静态文件在本地运行会缺少组件，只推荐在服务器或其他云服务上运行。",-1),o=(0,n.Uk)("主题使用的是 "),p={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/",target:"_blank",rel:"noopener noreferrer"},r=(0,n.Uk)("vuepress-theme-hope"),u=(0,n.Uk)("，其他主题和插件查看 "),d={href:"https://github.com/vuepress/awesome-vuepress/blob/main/v2.md",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("Awesome VuePress V2"),m=(0,n.Uk)("。"),h=(0,n._)("h2",{id:"插件",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,n.Uk)(" 插件")],-1),b={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("docsearch"),f=(0,n.Uk)("：将 Algolia DocSearch 集成到 VuePress 中，为你的文档网站提供搜索功能。开源技术向博客可以申请官方支持，商业化内容需要使用自己的爬虫。"),g={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("Iconfont 精选图标"),x={href:"https://www.npmjs.com/package/vuepress-plugin-helper-live2d",target:"_blank",rel:"noopener noreferrer"},U=(0,n.Uk)("看板娘"),y=(0,n._)("h2",{id:"初始配置",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#初始配置","aria-hidden":"true"},"#"),(0,n.Uk)(" 初始配置")],-1),w=(0,n.Uk)("环境配置：安装 npm、yarn、pnpm，方法查看 "),E=(0,n.Uk)("Linux 环境部署教程"),W=(0,n.Uk)("。"),P=(0,n._)("li",null,[(0,n.Uk)("新建文件夹，然后在该路径下运行命令 "),(0,n._)("code",null,"pnpm create vuepress-theme-hope@next docs"),(0,n.Uk)("。vuepress-theme-hope 主题的样例文件会存储在该路径下。")],-1),V=(0,n._)("li",null,[(0,n.Uk)("执行命令 "),(0,n._)("code",null,"pnpm docs:dev"),(0,n.Uk)(" 启动样例网站。")],-1),q=(0,n._)("code",null,"docs\\.vuepress",-1),A=(0,n.Uk)(" 路径下的 config.ts，navbar.ts，sidebar.ts，theme.ts 可以修改页面属性，设置方法参考 "),B={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("官方案例"),j=(0,n.Uk)("。 "),D=(0,n._)("ul",null,[(0,n._)("li",null,"config.ts：环境依赖包"),(0,n._)("li",null,"sidebar.ts：侧边栏，集合所有文档的目录"),(0,n._)("li",null,"navbar.ts：导航栏，放最常用的文档链接"),(0,n._)("li",null,"theme.ts：对主题和插件进行设置")],-1),T=(0,n._)("li",null,[(0,n.Uk)("如果遇到报错，执行命令 "),(0,n._)("code",null,"pnpm add vuepress@next vuepress-theme-hope@next && pnpm i && pnpm up"),(0,n.Uk)(" 修复并升级相关依赖包。这步可以解决大部分的报错。")],-1),M=(0,n._)("h2",{id:"减少文件变动",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#减少文件变动","aria-hidden":"true"},"#"),(0,n.Uk)(" 减少文件变动")],-1),C=(0,n._)("p",null,"我的笔记网站架构是 VuePress，一天要最少更新 3 次。但 VuePress 每次打包总会替换网站大部分的文件，导致自动部署特别耗时间，每次需要 10 分钟，期间打开网站就会出错。",-1),H=(0,n._)("p",null,"一开始，我以为是 hashname 用了时间规则所导致的文件名总不相同，但真实原因是 html 文件中的时间参数。",-1),L={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("vuepress-plugin-seo2"),R=(0,n.Uk)(" 在网页中插入 "),S=(0,n._)("code",null,"og:updated_time",-1),Z=(0,n.Uk)(" 和 "),F=(0,n._)("code",null,"article:modified_time",-1),G=(0,n.Uk)("，这两个参数都引用自 "),I=(0,n._)("code",null,"page.git.updatedTime",-1),O=(0,n.Uk)("。每次打包，大部分文件都会含有这两个参数，导致文件都发生了改变。"),J=(0,n.uE)('<p>编辑 theme.ts，使用 vuepress-plugin-seo2 的 ogp 参数对 meta 重新设置，删除不想要的参数。不要在 config.ts 设置 ogp，这会导致博客的自动摘要功能失效。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> seoPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-plugin-seo2&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">{</span>\n    blog<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 自动摘要</span>\n      autoExcerpt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token punctuation">[</span>seoPlugin<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      hostname<span class="token operator">:</span> <span class="token string">&quot;https://newzone.top&quot;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">ogp</span><span class="token operator">:</span> <span class="token punctuation">(</span>ogp<span class="token punctuation">,</span> page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token operator">...</span>ogp<span class="token punctuation">,</span>\n        <span class="token string-property property">&quot;og:updated_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n        <span class="token string-property property">&quot;og:modified_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，lastUpdated 参数也会让页面发生变化，但这是页面修改时间，而非 git 上传时间，不用特意屏蔽。如果想停止向页面导入 lastUpdated 参数，在 <code>theme.ts</code> 中插入 <code>lastUpdated: false</code> 即可。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  lastUpdated<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更换打包工具" tabindex="-1"><a class="header-anchor" href="#更换打包工具" aria-hidden="true">#</a> 更换打包工具</h2>',5),Y=(0,n.Uk)("VuePress v2 默认使用 Vite 打包。我把打包工具更换为 "),K={href:"https://v2.vuepress.vuejs.org/zh/guide/bundler.html",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("Webpack"),X=(0,n.Uk)("，并用 chainWebpack 设置文件命名规则。"),$=(0,n.uE)('<li><p>修改 config.ts 的导入设置，将 <code>import { defineUserConfig } from &quot;vuepress&quot;;</code> 替换为 <code>import { defineUserConfig } from &quot;@vuepress/cli&quot;;</code>。</p></li><li><p>Webpack 环境依赖包安装，并运行服务。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#组合命令，打包使用 Webpack</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> remove vuepress <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">add</span> vuepress-webpack@next sass-loader <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n\n<span class="token comment">#运行在本地服务器</span>\n<span class="token function">yarn</span> docs:dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合命令也能<strong>解决报错</strong>，升级相关依赖包。相关命令的分步解释见下方。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#确保你正在使用最新的 vuepress 和 vuepress-theme-hope 版本</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> vuepress@next vuepress-theme-hope@next\n\n<span class="token comment">#更换打包工具，Webpack 需手动下载 sass-loader</span>\n<span class="token function">pnpm</span> remove vuepress\n<span class="token function">pnpm</span> <span class="token function">add</span> -D vuepress-webpack@next sass-loader\n\n<span class="token comment">#常用插件：google-analytics，docsearch</span>\n<span class="token function">pnpm</span> <span class="token function">add</span> @vuepress/plugin-google-analytics@next @vuepress/plugin-docsearch@next\n\n<span class="token comment">#升级当前目录的依赖以确保你的项目只包含单个版本的相关包</span>\n<span class="token function">pnpm</span> i <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> up\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>',2),ee=(0,n.Uk)("修改文件命名规则：打开 config.ts，使用 "),se={href:"https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans",target:"_blank",rel:"noopener noreferrer"},ae=(0,n.Uk)("webpack-chain"),ne=(0,n.Uk)(" 修改 webpack 输出文件名规则，停止对 js 文件 hashname。"),te=(0,n._)("sup",{class:"footnote-ref"},[(0,n._)("a",{href:"#footnote1"},"[1]"),(0,n._)("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),le=(0,n.Uk)(),ie=(0,n._)("code",null,".filename",-1),ce=(0,n.Uk)(" 加路径容易报错，这里只把 chunk 文件放入子文件夹。"),oe=(0,n.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  bundler<span class="token operator">:</span> <span class="token function">webpackBundler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">chainWebpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// do not use chunk hash in js</span>\n      <span class="token comment">//参照案例：https://github.com/vuepress/vuepress-plugin-named-chunks/blob/b9fb5a1d3475530b1d74b6616f92a6e3bf14a7ed/__tests__/docs/.vuepress/config.js</span>\n      config<span class="token punctuation">.</span>output\n        <span class="token punctuation">.</span><span class="token function">filename</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[name].js</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">chunkFilename</span><span class="token punctuation">(</span><span class="token string">&quot;assets/chunks/[name].js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),pe=(0,n.Uk)("在找到 chainWebpack 配置前，我依照 "),re={href:"https://cli.vuejs.org/config/#vue-config-js",target:"_blank",rel:"noopener noreferrer"},ue=(0,n.Uk)("vue.config.js"),de=(0,n.Uk)(" 添加了 "),ke=(0,n._)("code",null,"filenameHashing: false",-1),me=(0,n.Uk)("，但 VuePress 并未停止 hashname。"),he=(0,n._)("h2",{id:"关闭-prefetch",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#关闭-prefetch","aria-hidden":"true"},"#"),(0,n.Uk)(" 关闭 prefetch")],-1),be=(0,n._)("p",null,"preload 是一种声明式的资源获取请求方式，用于提前加载一些需要的依赖，并且不会影响页面的 onload 事件。prefetch 是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制；通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度。preload 主要用于预加载当前页面需要的资源；而 prefetch 主要用于加载将来页面可能需要的资源。",-1),ve=(0,n.Uk)("VuePress "),fe={href:"https://vuepress.github.io/zh/reference/config.html#build-%E9%85%8D%E7%BD%AE%E9%A1%B9",target:"_blank",rel:"noopener noreferrer"},ge=(0,n.Uk)("Build 配置项"),_e=(0,n.Uk)(" 默认开启了 preload 和 prefetch。但是，开启了 prefetch，所有其它页面所需的文件都会被预拉取。页面较多或服务器宽带后付费的话，建议关闭 prefetch。"),xe=(0,n._)("p",null,[(0,n._)("code",null,"docs\\.vuepress"),(0,n.Uk)(" 路径下的 config.ts 配置中插入 "),(0,n._)("code",null,"shouldPrefetch: false,"),(0,n.Uk)("，即可关闭 prefetch。")],-1),Ue=(0,n._)("h2",{id:"自定义主题",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#自定义主题","aria-hidden":"true"},"#"),(0,n.Uk)(" 自定义主题")],-1),ye={class:"task-list-container"},we=(0,n.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Algolia DocSearch 申请中，等结果通知</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 去 meta 标签，看看对方会不会回复</label></li>',2),Ee={class:"task-list-item"},We=(0,n._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),Pe={class:"task-list-item-label",for:"task-item-2"},Ve={href:"https://vuepress-theme-hope.github.io/v2/zh/guide/feature/comment.html#waline",target:"_blank",rel:"noopener noreferrer"},qe=(0,n.Uk)("waline"),Ae=(0,n.Uk)(" 评论插件，无需账户，更适合大众。"),Be=(0,n.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"><s>google analytics 没反应，实际已经包含在 js 中了</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"><s>不用自动开启一堆的网站，关闭 prefetch</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"><s>生成文件名固定化，chainWebpack</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"><s>网页更新时，有时会打不开链接，需要使用缓存。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"><s>VuePress 博客页面：frontmatter 中添加 order 参数让最新的文章往上排，无法按文件名倒序排列</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 全局路径需要给子目录添加 README.md，没那么多内容填，暂时放弃。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 独立设置页面标题。未成功，所有页面都会加入默认标题。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 侧边栏显示客服图片。icon 位置直接放链接也没用。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 指定页面子标题不被目录页识别。但页面中取消 toc 的话，网页位置会出现偏移。</label></li>',9),ze={class:"task-list-item"},je=(0,n._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-12",checked:"checked",disabled:"disabled"},null,-1),De={class:"task-list-item-label",for:"task-item-12"},Te={href:"https://vuepress-theme-hope.github.io/v2/zh/cookbook/advanced/replace.html#%E6%8F%92%E6%A7%BD%E5%88%A9%E7%94%A8",target:"_blank",rel:"noopener noreferrer"},Me=(0,n.Uk)("修改导航栏 brand 链接"),Ce=(0,n.Uk)("，需用本地文件替代 "),He={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/src/client/module/navbar/components/NavbarBrand.ts",target:"_blank",rel:"noopener noreferrer"},Le=(0,n.Uk)("主题默认设置"),Ne=(0,n.Uk)("。设置的 ts 未生效，暂时放弃。"),Re=(0,n.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"><s>子域名中部署 blog 和 note，分别使用不同路径。这方案可以与 WordPress 共存，但未了避免后续出错，还是取消了。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"><s>Giscus 评论区设置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"><s>导航栏添加 repo 位置</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"><s>页面统计，插件只支持 Google、百度，后用图片标签方式植入统计。备用方法：将统计代码直接放在侧边栏。</s></label></li>',4),Se={class:"task-list-item"},Ze=(0,n._)("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-17",checked:"checked",disabled:"disabled"},null,-1),Fe={class:"task-list-item-label",for:"task-item-17"},Ge=(0,n.Uk)("定制页面标签：config.ts 中添加全局 "),Ie={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/config.ts",target:"_blank",rel:"noopener noreferrer"},Oe=(0,n.Uk)("head 标签"),Je=(0,n.Uk)("，或在页面中添加 "),Ye={href:"https://vuepress-theme-hope.github.io/v2/seo/zh/guide.html#%E7%9B%B4%E6%8E%A5%E6%B7%BB%E5%8A%A0-head-%E6%A0%87%E7%AD%BE",target:"_blank",rel:"noopener noreferrer"},Ke=(0,n.Uk)("独立 head 标签"),Qe=(0,n.Uk)("，支持图片统计代码。"),Xe=(0,n.uE)('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-18"><s>将 docs 里的 README.md 转移到主目录中，保持 github 项目页的同步。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-19"><s>打开页面链接，侧边栏焦点能不能也移动过去。侧边栏标题需要能在首屏出现，才能激活焦点。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"><s>默认主题颜色为白天，虽然不能切换，但发稿用白色就性。</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"><s>设置导航栏自动隐藏</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"><s>隐藏编辑时间和贡献者</s></label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"><s>用 md 控制图片是，图片不能显示。这可能是因为主题默认的 lazy 加载，改用七牛云的图片属性控制尺寸。</s></label></li>',6),$e=(0,n._)("hr",{class:"footnotes-sep"},null,-1),es={class:"footnotes"},ss={class:"footnotes-list"},as={id:"footnote1",class:"footnote-item"},ns={href:"https://blog.csdn.net/song854601134/article/details/121340077",target:"_blank",rel:"noopener noreferrer"},ts=(0,n.Uk)("chainWebpack 长用配置方式"),ls=(0,n.Uk)(),is=(0,n._)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),cs={},os=(0,a(1935).Z)(cs,[["render",function(e,s){const a=(0,n.up)("ExternalLinkIcon"),cs=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("p",null,[(0,n._)("a",t,[l,(0,n.Wm)(a)]),i]),c,(0,n._)("p",null,[o,(0,n._)("a",p,[r,(0,n.Wm)(a)]),u,(0,n._)("a",d,[k,(0,n.Wm)(a)]),m]),h,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",b,[v,(0,n.Wm)(a)]),f]),(0,n._)("li",null,[(0,n._)("a",g,[_,(0,n.Wm)(a)])]),(0,n._)("li",null,[(0,n._)("a",x,[U,(0,n.Wm)(a)])])]),y,(0,n._)("ol",null,[(0,n._)("li",null,[w,(0,n.Wm)(cs,{to:"/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2"},{default:(0,n.w5)((()=>[E])),_:1}),W]),P,V,(0,n._)("li",null,[q,A,(0,n._)("a",B,[z,(0,n.Wm)(a)]),j,D]),T]),M,C,H,(0,n._)("p",null,[(0,n._)("a",L,[N,(0,n.Wm)(a)]),R,S,Z,F,G,I,O]),J,(0,n._)("p",null,[Y,(0,n._)("a",K,[Q,(0,n.Wm)(a)]),X]),(0,n._)("ol",null,[$,(0,n._)("li",null,[(0,n._)("p",null,[ee,(0,n._)("a",se,[ae,(0,n.Wm)(a)]),ne,te,le,ie,ce]),oe,(0,n._)("p",null,[pe,(0,n._)("a",re,[ue,(0,n.Wm)(a)]),de,ke,me])])]),he,be,(0,n._)("p",null,[ve,(0,n._)("a",fe,[ge,(0,n.Wm)(a)]),_e]),xe,Ue,(0,n._)("ul",ye,[we,(0,n._)("li",Ee,[We,(0,n._)("label",Pe,[(0,n._)("s",null,[(0,n._)("a",Ve,[qe,(0,n.Wm)(a)]),Ae])])]),Be,(0,n._)("li",ze,[je,(0,n._)("label",De,[(0,n._)("a",Te,[Me,(0,n.Wm)(a)]),Ce,(0,n._)("a",He,[Le,(0,n.Wm)(a)]),Ne])]),Re,(0,n._)("li",Se,[Ze,(0,n._)("label",Fe,[(0,n._)("s",null,[Ge,(0,n._)("a",Ie,[Oe,(0,n.Wm)(a)]),Je,(0,n._)("a",Ye,[Ke,(0,n.Wm)(a)]),Qe])])]),Xe]),$e,(0,n._)("section",es,[(0,n._)("ol",ss,[(0,n._)("li",as,[(0,n._)("p",null,[(0,n._)("a",ns,[ts,(0,n.Wm)(a)]),ls,is])])])])])}]])},1935:(e,s)=>{s.Z=(e,s)=>{const a=e.__vccOpts||e;for(const[e,n]of s)a[e]=n;return a}}}]);