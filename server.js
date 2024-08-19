// const TelegramBot = require('node-telegram-bot-api')
// const { token } = require('./config')

// const bot = new TelegramBot(token, { polling: true })

// const createInlineButtons = buttons => buttons.map(button => ({
//     text: button.text,
//     callback_data: button.callback_data,
// }))

// const createBackButton = () => [{ text: 'Back 🔙', callback_data: 'back' }]

// const sendMessageWithOptions = (chatId, text, options) => {
//     const defaultOptions = { parse_mode: 'markdown' }
//     bot.sendMessage(chatId, text, { ...defaultOptions, ...options })
// }

// const editMessageWithOptions = (chatId, messageId, text, options) => {
//     const defaultOptions = { parse_mode: 'markdown' }
//     bot.editMessageText(text, { chat_id: chatId, message_id: messageId, ...defaultOptions, ...options })
// }

// bot.onText(/\/start/, msg => {
//     const chatId = msg.chat.id
//     const userName = msg.from.first_name
//     const userLastName = msg.from.last_name || ''
//     const welcomeMessage = `${userName} ${userLastName} \n عزیز به کانال من خوش آمدید 🙏🙏`

//     const startOptions = {
//         reply_markup: {
//             inline_keyboard: [
//                 createInlineButtons([{ text: 'About Me', callback_data: 'about_me' }, { text: 'Channels', callback_data: 'channels' }]),
//             ],
//         },
//     }

//     sendMessageWithOptions(chatId, welcomeMessage, startOptions);
//     console.log(msg)
// })


// bot.on('callback_query', callbackQuery => {  
//     const chatId = callbackQuery.message.chat.id;  
//     const messageId = callbackQuery.message.message_id;  
//     const data = callbackQuery.data;  

//     console.log('Received callback data:', data); // ثبت داده دریافتی  

//     switch (data) {  
//         case 'about_me':  
//             const amirInfo = `سلام من نیما هستم 21 سالمه`;  
//             const inlineKeyboard = [  
//                 [  
//                     { text: 'AmirNobari LinkedIn', url: amirlinkedinUrl },  
//                     { text: 'AmirNobari GitHub', url: amirgithubUrl },  
//                     { text: 'AmirNobari Telegram', url: amirtelegramUrl },  
//                 ],  
//                 createBackButton(),  
//             ];  
//             const aboutMeOptions = { reply_markup: { inline_keyboard: inlineKeyboard } };  
//             editMessageWithOptions(chatId, messageId, amirInfo, aboutMeOptions);  
//             break;  

//         // سایر case ها...  

//         case 'back':  
//             const startOptions = {  
//                 reply_markup: {  
//                     inline_keyboard: [  
//                         createInlineButtons([{ text: 'About Me', callback_data: 'about_me' }, { text: 'Channels', callback_data: 'channels' }]),  
//                     ],  
//                 },  
//             }  
//             editMessageWithOptions(chatId, messageId, 'به ربات من خوش آمدید 😍', startOptions);  
//             break;  

//         default:  
//             console.log('Unknown callback data:', data); // پیام برای callback های ناشناخته  
//     }  

//     bot.answerCallbackQuery(callbackQuery.id); // در انتهای switch  
// });






// const TelegramBot = require('node-telegram-bot-api');  
// const mongoose = require('mongoose');  
// const { token } = require('./config');  

// // اتصال به MongoDB  
// const mongoURI = 'mongodb+srv://Nima:test1234@cluster0.7dyvl4e.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0'; // رشته اتصال MongoDB   
// mongoose.connect(mongoURI)  
//     .then(() => console.log('MongoDB connected'))  
//     .catch(err => console.log(err));  

// // مدل کاربر  
// const userSchema = new mongoose.Schema({  
//     chatId: String,  
//     firstName: String,  
//     lastName: String,  
// });  
// const User = mongoose.model('User', userSchema);  

// const bot = new TelegramBot(token, { polling: true });  

// const createInlineButtons = buttons => buttons.map(button => ({  
//     text: button.text,  
//     callback_data: button.callback_data,  
// }));  

// const createBackButton = () => [{ text: 'Back 🔙', callback_data: 'back' }];  

// const sendMessageWithOptions = (chatId, text, options) => {  
//     const defaultOptions = { parse_mode: 'markdown' };  
//     bot.sendMessage(chatId, text, { ...defaultOptions, ...options });  
// };  

// const editMessageWithOptions = (chatId, messageId, text, options) => {  
//     const defaultOptions = { parse_mode: 'markdown' };  
//     bot.editMessageText(text, { chat_id: chatId, message_id: messageId, ...defaultOptions, ...options });  
// };  

// bot.onText(/\/start/, async msg => {  
//     const chatId = msg.chat.id;  
//     const userName = msg.from.first_name;  
//     const userLastName = msg.from.last_name || '';  
//     const welcomeMessage = `${userName} ${userLastName} \n عزیز به کانال من خوش آمدید 🙏🙏`;  

//     const startOptions = {  
//         reply_markup: {  
//             inline_keyboard: [  
//                 createInlineButtons([{ text: 'About Me', callback_data: 'about_me' }, { text: 'Channels', callback_data: 'channels' }]),  
//             ],  
//         },  
//     };  

//     // ذخیره کاربر در دیتابیس  
//     const newUser = new User({  
//         chatId,  
//         firstName: userName,  
//         lastName: userLastName  
//     });  

//     await newUser.save();  

//     sendMessageWithOptions(chatId, welcomeMessage, startOptions);  
//     console.log(msg);  
// });  

// bot.on('callback_query', callbackQuery => {  
//     const chatId = callbackQuery.message.chat.id;  
//     const messageId = callbackQuery.message.message_id;  
//     const data = callbackQuery.data;  

//     console.log('Received callback data:', data); // ثبت داده دریافتی  

//     switch (data) {  
//         case 'about_me':  
//             const amirInfo = `سلام من نیما هستم 21 سالمه`;  
//             const inlineKeyboard = [  
//                 [  
//                     { text: 'AmirNobari LinkedIn', url: amirlinkedinUrl },  
//                     { text: 'AmirNobari GitHub', url: amirgithubUrl },  
//                     { text: 'AmirNobari Telegram', url: amirtelegramUrl },  
//                 ],  
//                 createBackButton(),  
//             ];  
//             const aboutMeOptions = { reply_markup: { inline_keyboard: inlineKeyboard } };  
//             editMessageWithOptions(chatId, messageId, amirInfo, aboutMeOptions);  
//             break;  

//         // سایر case ها...  

//         case 'back':  
//             const startOptions = {  
//                 reply_markup: {  
//                     inline_keyboard: [  
//                         createInlineButtons([{ text: 'About Me', callback_data: 'about_me' }, { text: 'Channels', callback_data: 'channels' }]),  
//                     ],  
//                 },  
//             };  
//             editMessageWithOptions(chatId, messageId, 'به ربات من خوش آمدید 😍', startOptions);  
//             break;  

//         default:  
//             console.log('Unknown callback data:', data); // پیام برای callback های ناشناخته  
//     }  

//     bot.answerCallbackQuery(callbackQuery.id); // در انتهای switch  
// });





const TelegramBot = require('node-telegram-bot-api');  
const mongoose = require('mongoose');  
const { token } = require('./config');  

// اتصال به MongoDB  
const mongoURI = 'mongodb+srv://Nima:test1234@cluster0.7dyvl4e.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0'; // رشته اتصال MongoDB   
mongoose.connect(mongoURI)  
    .then(() => console.log('MongoDB connected'))  
    .catch(err => console.log(err));  

// مدل کاربر  
const userSchema = new mongoose.Schema({  
    chatId: String,  
    firstName: String,  
    lastName: String,  
});  
const User = mongoose.model('User', userSchema);  

const bot = new TelegramBot(token, { polling: true });  

const createInlineButtons = buttons => buttons.map(button => ({  
    text: button.text,  
    callback_data: button.callback_data,  
}));  

const createBackButton = () => [{ text: 'برگشت 🔙', callback_data: 'back' }];  

const sendMessageWithOptions = (chatId, text, options) => {  
    const defaultOptions = { parse_mode: 'markdown' };  
    bot.sendMessage(chatId, text, { ...defaultOptions, ...options });  
};  

const editMessageWithOptions = (chatId, messageId, text, options) => {  
    const defaultOptions = { parse_mode: 'markdown' };  
    bot.editMessageText(text, { chat_id: chatId, message_id: messageId, ...defaultOptions, ...options });  
};  

bot.onText(/\/start/, async msg => {  
    const chatId = msg.chat.id;  
    const userName = msg.from.first_name;  
    const userLastName = msg.from.last_name || '';  
    const welcomeMessage = `${userName} ${userLastName} \n عزیز به کانال من خوش آمدید 🙏🙏`;  

    const startOptions = {  
        reply_markup: {  
            inline_keyboard: [  
                createInlineButtons([{ text: 'درباره من', callback_data: 'about_me' }, { text: 'کانال‌ها', callback_data: 'channels' }]),  
            ],  
        },  
    };  

    // ذخیره کاربر در دیتابیس  
    const newUser = new User({ chatId, firstName: userName, lastName: userLastName });  
    await newUser.save();  

    sendMessageWithOptions(chatId, welcomeMessage, startOptions);  
    console.log(msg);  
});  

bot.on('callback_query', callbackQuery => {  
    const chatId = callbackQuery.message.chat.id;  
    const messageId = callbackQuery.message.message_id;  
    const data = callbackQuery.data;  

    console.log('Received callback data:', data); // ثبت داده دریافتی  

    switch (data) {  
        case 'about_me':  
            const amirInfo = `سلام من نیما هستم 21 سالمه`;  
            const inlineKeyboard = [  
                [  
                    { text: 'لینکدین من', url: 'https://www.linkedin.com/in/yourprofile/' },  // به روز رسانی با URL واقعی  
                    { text: 'گیت‌هاب من', url: 'https://github.com/yourprofile' },  // به روز رسانی با URL واقعی  
                    { text: 'تلگرام من', url: 'https://t.me/yourtelegram' },  // به روز رسانی با URL واقعی  
                ],  
                createBackButton(),  
            ];  
            const aboutMeOptions = { reply_markup: { inline_keyboard: inlineKeyboard } };  
            editMessageWithOptions(chatId, messageId, amirInfo, aboutMeOptions);  
            break;  

        case 'channels':  
            const channelsInfo = `اینها کانال‌های من هستند:`;  
            const channelsKeyboard = [  
                [  
                    { text: 'کانال تلگرام 1', url: 'https://t.me/your_channel_1' },  // تغییر به URL واقعی  
                    { text: 'کانال تلگرام 2', url: 'https://t.me/your_channel_2' },  // تغییر به URL واقعی  
                ],  
                createBackButton(),  
            ];  
            const channelsOptions = { reply_markup: { inline_keyboard: channelsKeyboard } };  
            editMessageWithOptions(chatId, messageId, channelsInfo, channelsOptions);  
            break;  

        case 'back':  
            const startOptions = {  
                reply_markup: {  
                    inline_keyboard: [  
                        createInlineButtons([{ text: 'درباره من', callback_data: 'about_me' }, { text: 'کانال‌ها', callback_data: 'channels' }]),  
                    ],  
                },  
            };  
            editMessageWithOptions(chatId, messageId, 'به ربات من خوش آمدید 😍', startOptions);  
            break;  

        default:  
            console.log('Unknown callback data:', data); // پیام برای callback های ناشناخته  
    }  

    bot.answerCallbackQuery(callbackQuery.id); // در انتهای switch  
});




// const TelegramBot = require('node-telegram-bot-api');
// // const mongoose = require('mongoose');
// const token = '7211669930:AAFaPqXORqsGQbisPvGHdCAN7D6NUiqXFTc';

// const bot = new TelegramBot(token, {polling: true});

// bot.onText(/\/start/ , msg =>{
//     bot.sendMessage(msg.chat.id , 'سلام' + msg.chat.first_name + 'به رباط ما خوش اومدی' ,
//     bot.sendMessage(msg.chat.id , '')
//     );
// })
// // img
// // bot.on('massag' , msg =>{
// //     console.log(msg.text);
// //     if(msg.text == 'ماکارون') {
// //         bot.sendMessage(msg.chat.id , 'my image id')
// //     }

// //     switch(msg.text){
// //         case 'my link' :
// //             bot.sendMessage(msg.chat.id , `http://t.me/mybotid?start=${msg.chat.id}`)
// //             break;
// //         case 'share us' :
// //             bot.sendMessage(msg.chat.id , 'my bot link')
// //             break;
// //         case 'about us' :
// //             bot.sendMessage(msg.chat.id , 'my bot link')
// //             break;
// //     }
// // })

// console.log('every thing ok!')
