
const Discord = require('discord.js');
const client = new Discord.Client();




client.login('NDM4MzcxMjQzODAxMDUxMTQx.DyuL0w.2YKPerRUndolKHXoa2O6NaBvNjY'); 


client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          





const  adminprefix  =  " ! " ؛
const  devs  = [ ' 496597218195800084 ' ، ' 438371243801051141 ' ]؛
العميل . على ( ' message ' ، message  => {
  var argresult =  message . محتوى . انقسام ( `  ` ). شريحة ( 1 ). انضمام ( '  ' )؛
    اذا ( ! devs . تتضمن ( message . author . id )) return ؛
    
إذا كان ( message . content . يبدأ بـ (adminprefix +  ' pl' )) {
  العميل . المستخدم . setGame (argresult)؛
    رسالة . قناة . sendMessage ( ` ** $ { argresult } تم تغيير بلاينق  إلى ** ` )
} آخر 
  إذا كان ( message . content . يبدأ بـ (adminprefix +  ' nm ' )) {
العميل . المستخدم . setUsername (argresult). ثم
    رسالة . قناة . sendMessage ( ` ** $ { argresult } **: تم تغيير الأسم  إلى ` )
 رسالة العودة . الرد ( " ** لا يمكن تغيير الاسم يجب عليك الانتظآر لمدة دقيقتائن. ** " )؛
} آخر
  إذا كان ( message . content . تبدأ (adminprefix +  ' af ' )) {
العميل . المستخدم . setAvatar (argresult)؛
  رسالة . قناة . sendMessage ( ` ** $ { argresult } **: تم تغير صورة بنجاح ` )؛
      } آخر     
إذا كان ( message . content . يبدأ بـ (adminprefix +  ' st' )) {
  العميل . المستخدم . setGame (argresult، " https://www.twitch.tv/idk " )؛ // wennnn
    رسالة . قناة . sendMessage ( ` ** تم تغيير تويتش  إلى   $ { argresult } ** ` )
}
})؛
