"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2937],{4254:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a=JSON.parse('{"key":"v-101edae1","path":"/services/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"article":false,"title":"Docker","order":4,"summary":"Docker Compose 是一个用来定义和运行复杂应用的 Docker 工具。一个使用 Docker 容器的应用，通常由多个容器组成。使用 Docker Compose 不再需要使用 shell 脚本来启动容器。 Compose 通过一个配置文件来管理多个 Docker 容器，在配置文件中，所有的容器通过 services 来定义，然后使用 docker","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/Docker.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源学习笔记"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T13:10:40.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-24T13:10:40.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"docker 命令","slug":"docker-命令","children":[]}],"git":{"createdTime":1658511538000,"updatedTime":1658668240000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":2}]},"readingTime":{"minutes":1.15,"words":346},"filePathRelative":"services/Docker.md","localizedDate":"2022年7月22日"}')},190:(n,s,e)=>{e.r(s),e.d(s,{default:()=>t});var a=e(8e3);const c=[(0,a.uE)('<p>Docker Compose 是一个用来定义和运行复杂应用的 Docker 工具。一个使用 Docker 容器的应用，通常由多个容器组成。使用 Docker Compose 不再需要使用 shell 脚本来启动容器。</p><p>Compose 通过一个配置文件来管理多个 Docker 容器，在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。</p><h2 id="docker-命令" tabindex="-1"><a class="header-anchor" href="#docker-命令" aria-hidden="true">#</a> docker 命令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 列出所有容器，有</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">ps</span>\n<span class="token comment"># 停止容器运行，避免报错</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> stop <span class="token operator">&lt;</span>CONTAINER ID<span class="token operator">&gt;</span>\n<span class="token comment"># 导出指定容器，保存路径可使用 /volume4/Backup</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token operator">&lt;</span>CONTAINER ID<span class="token operator">&gt;&gt;</span><span class="token operator">&lt;</span>保存路径<span class="token operator">&gt;</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">export</span> c867ca22741d<span class="token operator">&gt;</span>/volume4/Backup/qiandao.tar\n\n<span class="token comment">#将容器96f7f14e99ab的/var/lib/mysql目录拷贝到主机的/volume4/Backup目录中(需停止容器)</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> stop 1d6c6b36fa6c\n\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> 1d6c6b36fa6c:/var/lib/mysql /volume4/Backup\n\n<span class="token comment"># 进入容器</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 66f5cd1e373c /bin/bash\n<span class="token builtin class-name">exit</span>\n\n<span class="token function">sudo</span> <span class="token function">docker</span> attach 66f5cd1e373c\n\n<span class="token comment">#将主机/volume4/Backup/mysql目录拷贝到指定容器中</span>\n<span class="token comment">#复制后，huginn 无法正常启动</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">cp</span> /volume4/Backup/mysql 66f5cd1e373c:/var/lib/\n\n<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token function">diff</span> 66f5cd1e373c:/var/lib/mysql/\n\n<span class="token comment">#huginn导出数据库</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> run -it -p <span class="token number">49178</span>:3000 -v /home/huginn/mysql-data:/var/lib/mysql huginn/huginn\n<span class="token function">sudo</span> <span class="token function">docker</span> run -it -p <span class="token number">3000</span>:3000 -v 66f5cd1e373c:/var/lib/mysql huginn/huginn\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4)],o={},t=(0,e(1935).Z)(o,[["render",function(n,s){return(0,a.wg)(),(0,a.iD)("div",null,c)}]])},1935:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}}}]);