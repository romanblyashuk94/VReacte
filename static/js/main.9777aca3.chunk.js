(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{126:function(e,t,n){"use strict";t.a=n.p+"static/media/User.9dc92b0a.png"},127:function(e,t,n){"use strict";var a=n(3),r=n(9),s=n(8),i=n(0),c=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){return Object(r.b)(c)((function(t){return t.isAuth?Object(i.jsx)(e,Object(a.a)({},t)):Object(i.jsx)(s.Redirect,{to:"/login"})}))}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(29),r=n(3),s=n(26),i="messagesPage/SET-MESSAGE",c={messagesData:[{id:1,text:"Hi! Yo!",time:"3:00 pm",isMyMessage:!0},{id:2,text:"Hola",time:"3:03 pm",isMyMessage:!1},{id:3,text:"blablabla",time:"3:04 pm",isMyMessage:!0}],dialogsData:[{id:1,userName:"Kolobok",avatar:"https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg",status:"Online"},{id:2,userName:"Nyan Cat",avatar:"https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif",status:"Offline"},{id:3,userName:"Iron Man",avatar:"https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",status:"Online"}]},o=function(e){return function(t){t(e?function(e){return{type:i,newMessage:e}}(e):Object(s.a)("newMessageForm",{newMessageBody:"Message is empty!"}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:e.messagesData.length+1,text:t.newMessage,time:"3:00 pm",isMyMessage:!0};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[n])});default:return e}}},129:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return v})),n.d(t,"e",(function(){return U}));var a=n(10),r=n.n(a),s=n(14),i=n(29),c=n(3),o=n(18),u=n(90),l="usersPage/FOLLOW_USER",d="usersPage/UNFOLLOW_USER",p="usersPage/SET_USERS",f="usersPage/SET_CURRENT_PAGE",j="usersPage/TOOGLE_FETCHING_STATUS",b="usersPage/TOOGLE_FOLLOWING_IS_PROGESS",O={usersData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingIsProgres:[]},A=function(e){return{type:l,userID:e}},m=function(e){return{type:d,userID:e}},h=function(e){return{type:f,currentPage:e}},_=function(e){return{type:j,isFetching:e}},g=function(e,t){return{type:b,isProgres:e,userID:t}},x=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(_(!0)),n.next=3,o.d.getUsers(e,t);case 3:s=n.sent,a((r=s.items,i=s.totalCount,{type:p,users:r,totalUsersCount:i})),a(_(!1));case 6:case"end":return n.stop()}var r,i}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.b.followUser.bind(o.b),A);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,o.b.unfollowUser.bind(o.b),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(g(!0,n)),e.next=4,a(n);case 4:0===e.sent.resultCode&&(t(s(n)),t(g(!1,n))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t(g(!1,n));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,a,r){return e.apply(this,arguments)}}();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{usersData:Object(u.b)(e.usersData,"id",t.userID,{followed:!0})});case d:return Object(c.a)(Object(c.a)({},e),{},{usersData:Object(u.b)(e.usersData,"id",t.userID,{followed:!1})});case p:return Object(c.a)(Object(c.a)({},e),{},{usersData:t.users,totalUsersCount:t.totalUsersCount});case f:return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case j:return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case b:return Object(c.a)(Object(c.a)({},e),{},{followingIsProgres:t.isProgres?[].concat(Object(i.a)(e.followingIsProgres),[t.userID]):e.followingIsProgres.filter((function(e){return e!==t.userID}))});default:return e}}},135:function(e,t,n){e.exports={navbar:"Navbar_navbar__H1w-s"}},136:function(e,t,n){e.exports={news:"News_news__23hrz"}},137:function(e,t,n){e.exports={music:"Music_music__14_Xl"}},138:function(e,t,n){e.exports={settings:"Settings_settings__3HlvA"}},139:function(e,t,n){e.exports={my_posts:"MyPosts_my_posts__3lmuQ"}},143:function(e,t,n){e.exports={posts:"Posts_posts__2YDkX",post:"Posts_post__3tlx2",post__wrap:"Posts_post__wrap__2JkEZ",poster_ava:"Posts_poster_ava__34yOg",post__body:"Posts_post__body__2vOic",post__date:"Posts_post__date__kQ6xx",post__text:"Posts_post__text__DSHlp"}},144:function(e,t,n){e.exports={profile:"Profile_profile__E37EU"}},145:function(e,t,n){e.exports={wallpapper:"Wallpapper_wallpapper__hWCWX"}},146:function(e,t,n){e.exports={preloaderBlock:"Preloader_preloaderBlock__1BIOi"}},147:function(e,t,n){e.exports={notAuthUserBlock:"NotAuthUserBlock_notAuthUserBlock__2LaUs"}},175:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(142),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"3cb7fbf6-2a3c-4161-b9b1-aadf6fee4cdb"}}),s={getAuthData:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("/auth/login").then((function(e){return e.data}))}},i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))}},c={getProfile:function(e){return r.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status/",{status:e}).then((function(e){return e.data}))}},o={followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}}},180:function(e,t,n){},20:function(e,t,n){e.exports={profileinfo:"Profileinfo_profileinfo__3hYqN",profileinfo__wrap:"Profileinfo_profileinfo__wrap__2P1bG",profileinfo__ava:"Profileinfo_profileinfo__ava__1uyfM",userStatusBlock:"Profileinfo_userStatusBlock__Hyi61",userStatusText:"Profileinfo_userStatusText__259S5",editButton:"Profileinfo_editButton__37IJ6",userStatusEditor:"Profileinfo_userStatusEditor__e8Y2K",okButton:"Profileinfo_okButton__1pG-s",profileinfo__body:"Profileinfo_profileinfo__body__sluBK",profileinfo__name:"Profileinfo_profileinfo__name__2sNTb",profileinfo__info:"Profileinfo_profileinfo__info__2srCJ"}},22:function(e,t,n){e.exports={formElement:"FormControls_formElement__3ti50",errorText:"FormControls_errorText__1q7Sn",error:"FormControls_error__hXoi9",formSummuryError:"FormControls_formSummuryError__2Y6dV"}},23:function(e,t,n){e.exports={post:"Post_post__DQ3Fw",post__wrap:"Post_post__wrap__6xaSI",poster_ava:"Post_poster_ava__3d0eA",post__body:"Post_post__body__HxWae",post__date:"Post_post__date__cxdDh",post__text:"Post_post__text__3wnkw",likes:"Post_likes__1R4YI",like_icon:"Post_like_icon__1ZhiF",likes_count:"Post_likes_count__1ymx2",deletePostIcon:"Post_deletePostIcon__3EyZH"}},308:function(e,t,n){"use strict";n.r(t);var a=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,322)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))},r=(n(175),n(1)),s=n.n(r),i=n(66),c=n.n(i),o=n(8),u=(n(180),n(71)),l=n.n(u),d=n(72),p=n.n(d),f=n(12),j=n(0),b=function(e){var t=e.friendID,n=e.friendAvatar,a=e.frientName;return Object(j.jsx)(f.b,{className:p.a.friendsItem,to:"/".concat(t),children:Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{className:p.a.avatar,src:n,alt:"ava"}),Object(j.jsx)("div",{className:p.a.firendName,children:a})]})})},O=n(9),A=Object(O.b)((function(e){return{onlineFriendsData:e.friendsOnlineData}}))((function(e){var t=e.onlineFriendsData;return Object(j.jsxs)("div",{className:l.a.friendsOnline,children:[Object(j.jsx)("div",{className:l.a.title,children:"Friends Online:"}),Object(j.jsx)("ul",{className:l.a.friendsList,children:t.map((function(e){return Object(j.jsx)(b,{friendID:e.id,friendAvatar:e.avatar,frientName:e.name},e.id)}))})]})})),m=n(35),h=n.n(m),_=Object(O.b)((function(e){return{authUserID:e.auth.id}}),{})((function(e){return Object(j.jsxs)("ul",{className:h.a.menu,children:[Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/profile/"+e.authUserID,activeClassName:h.a.active,children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/messages",activeClassName:h.a.active,children:"Messages"})}),Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/news",activeClassName:h.a.active,children:"News"})}),Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/music",activeClassName:h.a.active,children:"Music"})}),Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/users",activeClassName:h.a.active,children:"Users"})}),Object(j.jsx)("li",{children:Object(j.jsx)(f.b,{to:"/settings",activeClassName:h.a.active,children:"Settings"})})]})})),g=n(135),x=n.n(g),v=function(){return Object(j.jsxs)("nav",{className:"".concat(x.a.navbar," grid_element"),children:[Object(j.jsx)(_,{}),Object(j.jsx)(A,{})]})},U=n(136),P=n.n(U),w=function(){return Object(j.jsx)("div",{className:P.a.news,children:"News"})},S=n(137),y=n.n(S),N=function(){return Object(j.jsx)("div",{className:y.a.music,children:"Music"})},k=n(138),D=n.n(k),I=function(){return Object(j.jsx)("div",{className:D.a.settings,children:"Settings"})},C=n(3),L=n(27),F=n(139),K=n.n(F),T=n(44),M=n.n(T),E=n(130),W=n(131),B=n(40),Z=n(67),X=Object(B.a)(300),H=Object(Z.a)("textarea"),R=Object(W.a)({form:"newPostForm"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)(E.a,{component:H,name:"newPostBody",validate:[X],className:M.a.new_post__area,placeholder:"Your news..."}),Object(j.jsx)("button",{className:M.a.new_post_button,children:"Post"})]})})),V=n(10),z=n.n(V),Q=n(14),Y=n(29),q=n(26),J=n(18),G="profilePage/SET-POST",$="profilePage/DELETE_POST",ee="profilePage/SET_USER_PROFILE",te="profilePage/SET_USER_STATUS",ne="profilePage/TOOGLE_FETCHING_STATUS",ae={postsData:[{id:3,ava:"https://avatars.githubusercontent.com/u/83500664?v=4",message:"Hey,yo!",date:"8/29/2021 8:36 PM",likesCount:10},{id:2,ava:"https://avatars.githubusercontent.com/u/83500664?v=4",message:"I am learning ReactJs",date:"8/28/2021 6:24 PM",likesCount:8},{id:1,ava:"https://avatars.githubusercontent.com/u/83500664?v=4",message:"Bla-bla-Bla",date:"8/28/2021 6:24 PM",likesCount:2}],userProfile:null,userStatus:""},re=function(e){return{type:ne,isFetching:e}},se=function(e){return{type:te,userStatus:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:var n={id:e.postsData.length+1,ava:"https://avatars.githubusercontent.com/u/83500664?v=4",message:t.postText,date:"8/29/2021 8:36 PM",likesCount:0};return Object(C.a)(Object(C.a)({},e),{},{postsData:[n].concat(Object(Y.a)(e.postsData))});case ne:return Object(C.a)(Object(C.a)({},e),{},{isFetching:t.isFetching});case ee:return Object(C.a)(Object(C.a)({},e),{},{userProfile:t.userProfile});case te:return Object(C.a)(Object(C.a)({},e),{},{userStatus:t.userStatus});case $:return Object(C.a)(Object(C.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postID}))});default:return e}},ce=Object(O.b)(null,{checkAddingPost:function(e){return function(t){t(e?function(e){return{type:G,postText:e}}(e):Object(q.a)("newPostForm",{newPostBody:"Post is Empty!"}))}}})((function(e){return Object(j.jsxs)("div",{className:M.a.new_posts,children:[Object(j.jsx)("h2",{className:M.a.new_posts__title,children:"My Posts"}),Object(j.jsx)(R,{onSubmit:function(t){e.checkAddingPost(t.newPostBody)}})]})})),oe=n(23),ue=n.n(oe),le=Object(O.b)((function(e){return{authUserID:e.auth.id}}),{deletePost:function(e){return{type:$,postID:e}}})((function(e){var t=e.selectedUserID,n=e.authUserID,a=e.postID,r=e.ava,s=e.date,i=e.message,c=e.likesCount,o=e.deletePost;return Object(j.jsx)("div",{className:ue.a.post,children:Object(j.jsxs)("div",{className:ue.a.post__wrap,children:[Object(j.jsx)("img",{src:r,alt:"Ava",className:ue.a.poster_ava}),Object(j.jsxs)("div",{className:ue.a.post__body,children:[Object(j.jsx)("p",{className:ue.a.post__date,children:s}),Object(j.jsxs)("p",{className:ue.a.post__text,children:[" ",i," "]}),Object(j.jsxs)("div",{className:ue.a.likes,children:[Object(j.jsx)("a",{href:"S#",children:Object(j.jsx)("img",{className:ue.a.like_icon,src:"https://www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png",alt:"Like"})}),Object(j.jsxs)("span",{className:ue.a.likes_count,children:[c," Likes"]}),+t===n&&Object(j.jsx)("img",{onClick:function(){o(a)},className:ue.a.deletePostIcon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcoAAAIACAMAAAA12dyhAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMA56Pbr7hzNCttsygZFr/7DAb3WkLEmQLyStCTEuziyp97O4lQHqiN1oRVI3ZpZWDZrC+8gddDaAoAAA4dSURBVHja7NjdTttAFEXhQxNR2iYktusfFMdO1ZCWElAoPe//aq0qIbjE4LHHW+t7haU9OhqbonVWtNuVB5Ju2+LX2hDebZF6cNXm2hBWcpP6INJjaQho0fpgLmtDMLeND+jEIxvMcuaD+skuAykffWBzQxB3PrjMEMB664NrEkP/jj6Ce0P/Tj6C1tC7Cx/FwmA2+aOHwyeMjY/ixtC3uY9iZ+jbo4/iwdC3S381PnziRkoZpJRBShmklEFKGaSUQUoZpJRBShmklEFKGaSUQUoZpJRBShmklEFKGaSUQUoZpJRBShmklEHKV0n2RX6axS31UVSzmJ3yYp/YC1njmKwme57kzjFpu6dhHhwTd7D/Pjkm787+qSvH5FW1mR0dAs7NLHcIyM3K1CEgLa12SKht4ZCwJKUKUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSyiClDFLKIKUMUsogpQxSylja8gwSagMAAAAAAAAAAAAAAAAAAACAiJW/778XHzC23eb8am3vcP3jzBGLdH5lb1RvVo6otB/tLb42jtis/pTWWZY6IvSQWEd7HtdIHTru8kvliNQ36yR3xGp1YR3sHfH6zChl/GXv3paUhqIgDDcoiCJGJ1EUUVHKw+h4mrHf/9UsvSIJF3stLXeb6u8JCP8FVEPtvQ5MAzRlr1GspSm7QbFLmrIZij2hKWtQ7DlN2QWKHWnKZii2pCnb+RvsVCxQrKMpm6PYiqbsPYptaMquUGzrHyultSjnf2dJ61BuRxN2jXILmrD7KHeg6Wq28HI3DTPAy9007AAvd9OwALzcTcMcAdc0XUeU86VA0paAl7tpaAEvd9PQAV7upuEaETc0WRtEzGmqmi0i3tNUzRByRVO1Q8hXmqoFQp7RVM0BL3fTcAS83E3DEiGPaKpaxLygieoQ84EmaoWYBzRRG8S8o2lqtoCXu0mYIeg1TdMO8HI3DQvAy900HBB0h6bpiN98Ntr/bwl4uZuGFvByNw0dILjcfVwXumGZ47rQJcs8Xhd6xn9lBQgud3dQ6Pbf/hy5yzILvUNVNoDgcueUzO92WkcWOmVqt1Nc7pwyboewLzzDKaunXOA3tUsNnDK12ykud06Z2u0UlzunjFsi7CHPcMrqKVvEPeWYU1ZP2SHuG8ecsnrKFX6Ru2HNKeP2iPvOMaesnbLZAorLnVNmdjvJ5c4pM7ud5HLnlJndTnK5c8qwAxLecMwpa6c8IuETx5yydsolILncOWVYC0gud04Z1iHjFkecsnbKFSC53Dll2B4ZtznilJVTNjihdOOzU0a9RMoPjjhl5ZSvkPKZI05ZOeUCKR854pSVUx4AzeXOKRO7neZy55RRdwHN5c4po1rkXHDIKSun7JDzkkNOWTnlCjmvOOSUlVPukXOPQ05ZN+UFILrcOWXQSyRdcsgp66Z8hYH88zpl3ZT3ANHlzin/ZLeTuibYKYMukbTmkFPWTXkXSXsOOWXdlC0gutw5ZVAHiC53Thm0BkSXO6eM73aiy51Txlwg7cABp0ylrL7bnVnunDKTsv5ud+aBnTKVsvpuB7QccMpESoHd7sxy55TxlAq73ZnX55SZt6r+bndmuXPKqik/Iq9hn1NWTdkhb8Y+p6yaco28HfucsmrKPfIW7HPKXMrqu914uXPKVMr6ux1wZJ9TZlIK7HbAkn1OmUkpsNuNlzunrJnyCSC73DlldLeTXe6cMrrb5W3Y55ThlCK7HbYNe5wylVJgtxstd06ZSamw242WO6fMpay/242WO6dMpJTY7YA5e5wyk1JhtwPes8cpEykldjvgij1OmUgpsdsBX9njlJmUCrsd8Iw9ThlOKbLbAdfsccp4So3dDrjPHqeMplTZ7YBHDU85ZcWUb/BnXvCUUyZSaux2w+XOKRMpNXY74IannDKcUmW3A97xlFOGU6rsdsPlzinDKVV2u+Fy55TxlCK73XC5c8p4SpHdbrjcOWU4pcpuB9zhKacMp1TZ7YC3POWU0ZQyu91P9u5jyYkgCqLoxUfgvRs8g2dggMn//zVCakndYsN7gejOReYXVNXZ3U3BHU0Xyj6lS7f7o9yFsk/p0u3goyYL5XKUt/nX3dRkoexS+nS7P8pdKLuUPt0OjjRZKLuUPt0OXmuyUC5GeZF/3jdNFsoupU+3+6PchXIxyjNwLnehrO8EnMtdKFvdzrnchXLObgePNS6Ui1F+4d93qnGh7FIadTt4oHGhbFI6dTv4oXGhXIryAliXu1CW9wCsy10oO93OutyFcs5uB8caF8oupVG3gzcaF8ompVO3gy8aF8ompVO3g9saF8ompVW32yt3oexRenU7uKDdQtmldOp2e+UulE1Kq263946h7FF6dTt4qN1C2aS06nZwpt1C2aI063Zwot1C2aS06nZ75S6UTUqrbrdX7kLZo/TqdnvlLpQLUR6Dd7kL5bzdDu5qu1C2KN263bTchbJJ6dXtpuUulMtQPgbzchfKerczL3ehnLfbwSdtF8oOpV23m947lC1Kt24Hn7VdKJuUXt1uWu5C2aM063ZwTduFskdp1u3gmbYLZYvSrttNyl0oW5R23Q5eaLNQtijtuh281Gah7FD6dTu4qs1C2aH063aTchfKDqVft5uUu1AuQvkD3MtdKGs7AvdyF8qZux3c12ah7FD6dbvJOUPZeSK/bjcpd6HsUBp2O7ilYaFsUDp2u7HchbJDadjtxnIXyg6lYbeDSxoWyjqlZbeDVxoWygalY7eDtxoWyhalX7eDyxoWyg6lYbeDexoWyiUoXwPu5S6UpX0D3MtdKOfudnBDw0LZoLTsdjzalLtQ1ik9ux2c03qh7FA6djt4qvVC2aF07Ha7chfKBShPOejOa71QNigtu92u3IWyTGna7XblLpQtSsNutyt3oexQOna7XbkLZZ3Ss9vBT60XygalZbeD61ovlA1Ky263K3ehXIDyHQDm5S6U5W7nXu5COX+3g19aLZRlStduty13oaxTmnY7+KDVQlmltO128FWrhbJDadnt4LtWC2WD0rPbwROtFsoypWu3gytaLZR1StNuty13oZyf8goH3h2tFsoypW23g+eSFMo6pWu3g4+SFMo6pWu3g5uSFMoypW23g/eSFMrZKW+ymXe5C+Xf956D77UkhbJO6drtNuUulGVK2263KXehrFL6drtNuQvl7JRPOPjeSVIoa5TO3W5T7kJZpvTtdkO5C+XslHc4/E4lhXJuyuds513uQtnpdtblLpRLdDs4khTKKqVxtxvKXSirlMbdDr5JCmWR0rnbwbGkUBYpnbvdUO5CWaU07nZDuQul7Vcsnd2WFMoqpXO3g8dSKIuU1t0OTqVQFimtux08kEI5M+VH/st+SKEsUZp3OziSQlmj9O52cCaFskhp3e3gRApljdK728GxFMoapXe3gzdSKIuU1t0OvkihdP2JpV3uQlmk9O528FihrFGadzu4oFDWKM27HTxQKGuU5t0OLiqUFUr7bgcPFcoSpXu3gzOFskZp3u3gRKEsUbp3O/isUM5L+Z29GZe7UC7T7eCaQlmg9O92v9u7s6UmgjgK418UEChCEnaQVVTCpiz+3//VvPDKpGemU2Q6farO7xFyKhfzzdIwDk+ZN2Xt3Q72PGXWlNV3O7j0lFlTVt/t4MpTZk1ZfbeDbU+ZMaVAt4MjT5kzZf3dDu49ZdEp7+jNlqcsOuUTM+otd55y4W5X6zHBnnLRbldtufOUK+p2cO4pi065w6xqy52nXLTbVVvuPOWC3a7ecucpF+52tZY7T9nqnR5de8qcKevvdnDrKTOmFOh2sOUpu6dU6Haw7yk7p5TodnDgKXOmrL/bwaan7PplNLodnHvKjCkVuh3HI0/ZPaVCt4OBp8yYUqDbwZmn7JxSotvBuqfsmFKk28G1pyw25Sfm1FvuPOXKuh1seMrOKSW6Hex7yq4pNbodHHjKzikluh28ecpiU77Rq6Gn7JpSo9vB8chTFppyNCGl0nLnKRfvdpWWO0/Z4oykSsudp1xdt4NPnrJtSp1uB3eesnNKiW4HT56ya0qNbge/PWXHlCLdDk49ZceUIt0O3jxl+5Qq3Q52PGX7lCrdDiYjT9k2pU63gwtPWWTKAb2besqOKUW6Hbx7ypYphbod/PSUzVMqdTu485TtU6p0O3jylK1TynS75Za7w+1Mg8gz3c40jTwX25l24x+dbgenYc2Euh18CWsm1O3gR1gjpW4Hk7ACRsc0qLTc2eLdjjrLna2w28FuWP/WaVJpubMVdjv4GtZIqdvBTVj/NijgV1j/9mnicifmgCYud2LeaOByp2ZIA5c7MUW6HZyEpch1O3gJS1LrdnAYlqTW7eA1LEWu27nclXBLC5c7JRs0crnTsk8R38NS5LodfAtLE+t28BiWItftYByWINjtXO7SBLsdfA5L0Ot2LncN9LodrIX165pCjsLmCXY7+BOWoNft4DksRa7budw10Ot2Lnf926SFy52SIe1c7lQU63awFzZPsNvBZdgcxW4HV2FzFLudy12SYrdzuUtS7HZwHzZPsNvBVtg8wW4HD2FzFLudy12SYreDnbA+jclR4YGkNmNKN7/MJeGIHBV+qtlmnVLQ2I/C9mcwIUeN5xrY/24oaui/ZV8GY3L4Ua36PZDJd0cqd0RxY79u0If1CeWN38OW7XXCKhzfj8KWaW+DVdl89ZjLs3f9yArtbK29+Lrkw0Yn09fnIR/xFzg5RTs4nhYuAAAAAElFTkSuQmCC",alt:"deletePostIcon"})]})]})]})})})),de=n(143),pe=n.n(de),fe=Object(O.b)((function(e){return{postsData:e.profilePage.postsData}}))((function(e){var t=e.postsData,n=e.selectedUserID,a=t.map((function(e){return Object(j.jsx)(le,{postID:e.id,ava:e.ava,message:e.message,date:e.date,likesCount:e.likesCount,selectedUserID:n},e.id)}));return Object(j.jsx)("div",{className:pe.a.posts,children:a})})),je=function(e){var t=e.selectedUserID;return Object(j.jsxs)("div",{className:K.a.my_posts,children:[Object(j.jsx)(ce,{}),Object(j.jsx)(fe,{selectedUserID:t})]})},be=n(144),Oe=n.n(be),Ae=n(20),me=n.n(Ae),he=n(126),_e=n(96),ge=n.p+"static/media/editButton.e9f70ee6.png",xe=function(e){var t=e.userStatus,n=e.authUserID,a=e.selectedUserID,s=e.updateUserStatus,i=Object(r.useState)(!1),c=Object(_e.a)(i,2),o=c[0],u=c[1],l=Object(r.useState)(t),d=Object(_e.a)(l,2),p=d[0],f=d[1];Object(r.useEffect)((function(){f(t)}),[t]);return Object(j.jsx)("div",{className:me.a.userStatusBlock,children:o?Object(j.jsxs)("div",{className:me.a.userStatusEditor,children:[Object(j.jsx)("input",{value:p,onChange:function(e){f(e.currentTarget.value)}}),Object(j.jsx)("button",{className:me.a.okButton,onClick:function(){u(!1),s(p)},children:"OK"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:me.a.userStatusText,children:t}),n===+a?Object(j.jsx)("img",{className:me.a.editButton,onClick:function(){u(!0)},src:ge,alt:"editButton"}):null]})})},ve=["userProfile"],Ue=function(e){var t=e.userProfile,n=Object(L.a)(e,ve);return Object(j.jsx)("div",{className:me.a.profileinfo,children:Object(j.jsxs)("div",{className:me.a.profileinfo__wrap,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:me.a.profileinfo__ava,src:t.photos.large||he.a,alt:"Avatar"})}),Object(j.jsxs)("div",{className:me.a.profileinfo__body,children:[Object(j.jsx)("div",{className:me.a.profileinfo__name,children:t.fullName}),Object(j.jsx)(xe,Object(C.a)({},n)),Object(j.jsx)("div",{className:me.a.profileinfo__info,children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["About me: ",t.aboutMe||"No information"]}),Object(j.jsxs)("li",{children:["Looking for a job: ",t.lookingForAJob?"Yes":"No"]}),Object(j.jsx)("li",{children:t.lookingForAJobDescription})]})})]})]})})},Pe=n(145),we=n.n(Pe),Se=function(){return Object(j.jsx)("img",{src:"https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg",alt:"",className:we.a.wallpapper})},ye=n(51),Ne=["userProfile"],ke=function(e){var t=e.userProfile,n=Object(L.a)(e,Ne);return t?Object(j.jsxs)("div",{className:Oe.a.profile,children:[Object(j.jsx)(Se,{}),Object(j.jsx)(Ue,Object(C.a)({userProfile:t,selectedUserID:n.match.params.userID},n)),Object(j.jsx)(je,{selectedUserID:n.match.params.userID})]}):Object(j.jsx)(ye.a,{})},De=n(127),Ie=n(11),Ce=["authUserID","getUserProfile","getUserStatus"],Le=Object(Ie.d)(Object(O.b)((function(e){return{userProfile:e.profilePage.userProfile,userStatus:e.profilePage.userStatus,authUserID:e.auth.id}}),{getUserProfile:function(e){return function(){var t=Object(Q.a)(z.a.mark((function t(n){var a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(re(!0)),t.next=3,J.c.getProfile(e);case 3:a=t.sent,n({type:ee,userProfile:a}),n(re(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(Q.a)(z.a.mark((function t(n){var a;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.c.getStatus(e);case 2:a=t.sent,n(se(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(Q.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(se(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),o.withRouter,De.a)((function(e){var t=e.authUserID,n=e.getUserProfile,a=e.getUserStatus,s=Object(L.a)(e,Ce);return Object(r.useEffect)((function(){var e=s.match.params.userID;e||(e=t),n(e),a(e)}),[s.match.params.userID]),Object(j.jsx)(ke,Object(C.a)({authUserID:t},s))})),Fe=n(74),Ke=n.n(Fe),Te=n.p+"static/media/vr-logo.5f4c932f.png",Me=n(147),Ee=n.n(Me),We=function(){return Object(j.jsxs)("div",{className:Ee.a.notAuthUserBlock,children:[Object(j.jsx)(f.b,{to:"/login/",children:"Sign In"}),Object(j.jsx)(f.b,{to:"/reg/",children:"Sign Up"})]})},Be=n(95),Ze=n.n(Be),Xe=function(e){var t=e.authUserID,n=e.authUserLogin,a=e.logoutUser;return Object(j.jsxs)("div",{className:Ze.a.AuthUserBlock,children:[Object(j.jsx)(f.b,{to:"/profile/"+t,children:n}),Object(j.jsx)("button",{onClick:a,className:Ze.a.signOutButton,children:"Sign Out"})]})},He=function(e){var t=e.isAuth,n=e.id,a=e.login,r=e.logoutUser;return Object(j.jsxs)("header",{className:"".concat(Ke.a.header," grid_element"),children:[Object(j.jsxs)(f.b,{to:"/profile",children:[Object(j.jsx)("img",{className:Ke.a.logo,src:Te,alt:"logo"}),Object(j.jsx)("span",{children:"eacte"})]}),Object(j.jsx)("div",{className:Ke.a.loginBlock,children:t?Object(j.jsx)(Xe,{authUserID:n,authUserLogin:a,logoutUser:r}):Object(j.jsx)(We,{})})]})},Re="auth/SET_USER_AUTH_DATA",Ve={id:null,login:null,email:null,isAuth:!1},ze=function(e,t,n,a){return{type:Re,data:{id:e,login:t,email:n,isAuth:a}}},Qe=function(){return function(){var e=Object(Q.a)(z.a.mark((function e(t){var n,a,r,s,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.getAuthData();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,s=a.login,i=a.email,t(ze(r,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(C.a)(Object(C.a)({},e),t.data);default:return e}},qe=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,id:e.auth.id}}),{logoutUser:function(){return function(){var e=Object(Q.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.logout();case 2:0===e.sent.resultCode&&t(ze(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(j.jsx)(He,Object(C.a)({},e))})),Je=n(34),Ge=n.n(Je),$e=n(22),et=n.n($e),tt=Object(B.a)(200),nt=Object(Z.b)("input"),at=Object(W.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("div",{className:Ge.a.inputWraper,children:Object(j.jsx)(E.a,{type:"text",placeholder:"Email",component:nt,validate:[B.b,tt],name:"email"})}),Object(j.jsx)("div",{className:Ge.a.inputWraper,children:Object(j.jsx)(E.a,{type:"password",placeholder:"Password",component:nt,validate:[B.b,tt],name:"password"})}),Object(j.jsx)("div",{className:Ge.a.inputWraper,children:Object(j.jsxs)("label",{htmlFor:"remember",children:[Object(j.jsx)(E.a,{id:"remember",type:"checkbox",component:"input",name:"rememberMe"})," ","remember me"]})}),n&&Object(j.jsx)("div",{className:et.a.formSummuryError,children:n}),Object(j.jsx)("div",{className:Ge.a.inputWraper,children:Object(j.jsx)("button",{children:"Login"})})]})})),rt=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,authUserID:e.auth.id}}),{loginUser:function(e,t,n){return function(){var a=Object(Q.a)(z.a.mark((function a(r){var s;return z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,J.a.login(e,t,n);case 2:0===(s=a.sent).resultCode?r(Qe()):r(Object(q.a)("login",{_error:s.messages}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(j.jsx)(o.Redirect,{to:"/profile/"+e.authUserID}):Object(j.jsxs)("div",{className:Ge.a.loginPage,children:[Object(j.jsx)("h1",{className:Ge.a.title,children:"LOGIN"}),Object(j.jsx)(at,{onSubmit:function(t){e.loginUser(t.email,t.password,t.rememberMe)}})]})})),st="app/INITIALIZED_SUCCESS",it={initialaized:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case st:return Object(C.a)(Object(C.a)({},e),{},{initialaized:!0});default:return e}},ot=n(148),ut=s.a.lazy((function(){return n.e(3).then(n.bind(null,324))})),lt=s.a.lazy((function(){return n.e(4).then(n.bind(null,323))})),dt=Object(O.b)((function(e){return{initialaized:e.app.initialaized}}),{initializeApp:function(){return function(){var e=Object(Q.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Qe());case 2:t({type:st});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.initialaized,n=e.initializeApp;return Object(r.useEffect)((function(){n()}),[]),t?Object(j.jsxs)("div",{className:"app__wrapper",children:[Object(j.jsx)(qe,{}),Object(j.jsx)(v,{}),Object(j.jsx)("div",{className:"maincontent grid_element",children:Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)(ye.a,{}),children:[Object(j.jsx)(o.Route,{path:"/profile/:userID?",render:function(){return Object(j.jsx)(Le,{})}}),Object(j.jsx)(o.Route,{path:"/messages",render:function(){return Object(j.jsx)(ut,{})}}),Object(j.jsx)(o.Route,{path:"/news",component:w}),Object(j.jsx)(o.Route,{path:"/music",component:N}),Object(j.jsx)(o.Route,{path:"/settings",component:I}),Object(j.jsx)(o.Route,{path:"/users",render:function(){return Object(j.jsx)(lt,{})}}),Object(j.jsx)(o.Route,{path:"/login",render:function(){return Object(j.jsx)(rt,{})}}),Object(j.jsx)(o.Route,{path:"/",render:function(){return Object(j.jsx)(ot.Redirect,{to:"/login"})}})]})})]}):Object(j.jsx)(ye.a,{})})),pt=n(149),ft=[{id:1,avatar:"https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg",name:"Kolobok"},{id:2,avatar:"https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",name:"Iron Man"},{id:3,avatar:"https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif",name:"Nyan Cat"},{id:4,avatar:"https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z",name:"Naruto"},{id:5,avatar:"https://pbs.twimg.com/profile_images/992736553507188736/_0kbr7--.jpg",name:"Jack Sparrow"}],jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft;return e},bt=n(128),Ot=n(129),At=n(132),mt=Object(Ie.c)({profilePage:ie,messagesPage:bt.b,friendsOnlineData:jt,usersPage:Ot.a,auth:Ye,app:ct,form:At.a}),ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,_t=Object(Ie.e)(mt,ht(Object(Ie.a)(pt.a)));window.store=_t;var gt=_t;c.a.render(Object(j.jsx)(f.a,{children:Object(j.jsx)(O.a,{store:gt,children:Object(j.jsx)(dt,{})})}),document.getElementById("root")),a()},34:function(e,t,n){e.exports={loginPage:"LoginPage_loginPage__2DMbU",title:"LoginPage_title__1Xq2i",inputWraper:"LoginPage_inputWraper__2eQQd"}},35:function(e,t,n){e.exports={menu:"Menu_menu__3KLlq",active:"Menu_active__1HwZ_"}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required!"},r=function(e){return function(t){if(t&&t.length>e)return"Max Length is ".concat(e," symbols!")}}},44:function(e,t,n){e.exports={new_posts:"NewPost_new_posts__3pUgs",new_posts__title:"NewPost_new_posts__title__5EIH8",new_post__area:"NewPost_new_post__area__2CI6j",new_post_button:"NewPost_new_post_button__3yjwL"}},51:function(e,t,n){"use strict";var a=n.p+"static/media/preloader.b51df3f3.gif",r=n(146),s=n.n(r),i=n(0);t.a=function(){return Object(i.jsx)("div",{className:s.a.preloaderBlock,children:Object(i.jsx)("img",{src:a,alt:"preloader"})})}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(3),r=n(27),s=n(22),i=n.n(s),c=n(0),o=["input","meta"],u=["input","meta"],l=function(e){return function(t){var n=t.input,s=t.meta,u=Object(r.a)(t,o);return Object(c.jsxs)("div",{className:"".concat(i.a.formElement," ").concat(!s.active&&s.error?i.a.error:null),children:[Object(c.jsx)(e,Object(a.a)(Object(a.a)({className:i.a.field},n),u)),Object(c.jsx)("span",{className:i.a.errorText,children:s.error})]})}},d=function(e){return function(t){var n=t.input,s=t.meta,o=Object(r.a)(t,u);return Object(c.jsxs)("div",{className:"".concat(i.a.formElement," ").concat(s.touched&&s.error?i.a.error:null),children:[Object(c.jsx)(e,Object(a.a)(Object(a.a)({className:i.a.field},n),o)),Object(c.jsx)("span",{className:i.a.errorText,children:s.error})]})}}},71:function(e,t,n){e.exports={friendsOnline:"FriendsOnline_friendsOnline__26Q2k",title:"FriendsOnline_title__2FmJr",friendsList:"FriendsOnline_friendsList__31Tcu"}},72:function(e,t,n){e.exports={friendsItem:"FriendItem_friendsItem__2Alsh",avatar:"FriendItem_avatar__2hT5R",firendName:"FriendItem_firendName__tM-ah"}},74:function(e,t,n){e.exports={header:"Header_header__jMAnd",logo:"Header_logo__Ln1dn",loginBlock:"Header_loginBlock__3KiLN"}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(3),r=n(29),s=function(e,t){for(var n=Array.from(new Set([1,2,3,t<2?1:t-1,t,t>=e?e:t+1,e-2,e-1,e])).sort((function(e,t){return e-t})).filter((function(t){return t>0&&t<=e})),a=1;a<n.length;a++)n[a]-1!==n[a-1]&&(n=[].concat(Object(r.a)(n.slice(0,a)),[0],Object(r.a)(n.slice(a))),a++);return n},i=function(e,t,n,r){return e.map((function(e){return e[t]===n?Object(a.a)(Object(a.a)({},e),r):e}))}},95:function(e,t,n){e.exports={AuthUserBlock:"AuthUserBlock_AuthUserBlock__2XeBv",signOutButton:"AuthUserBlock_signOutButton__9t8Yb"}}},[[308,1,2]]]);
//# sourceMappingURL=main.9777aca3.chunk.js.map