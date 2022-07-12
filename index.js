function convertCode(){
    let str = ""
    let uCode = document.getElementById("uCode");
    let mainCode = document.getElementById("mainCode");
    str = uCode.value;

    // START
    strArr =  str.split(';')
    var datr = "";
    var sb = "";
    var m_pixel_ratio = "";
    var locale = '"locale": "en_GB"';
    var fr = "";
    var c_user = "";
    var xs = "";
    var wd = "";
    var noscript = '"noscript": "1"';

    for(let i = 0; i < strArr.length; i++){
            if(strArr[i].includes('datr'))
            {
                dtt = strArr[i].split('=')
                datr = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('sb'))
            {
                dtt = strArr[i].split('=')
                sb = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('m_pixel_ratio'))
            {
                dtt = strArr[i].split('=')
                m_pixel_ratio = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('locale'))
            {
                dtt = strArr[i].split('=')
                locale = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('fr'))
            {
                dtt = strArr[i].split('=')
                fr = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('c_user'))
            {
                dtt = strArr[i].split('=')
                c_user = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('xs'))
            {
                dtt = strArr[i].split('=')
                xs = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
            if(strArr[i].includes('wd'))
            {
                dtt = strArr[i].split('=')
                wd = '"'+dtt[0]+'": "'+dtt[1]+'"'
            }
        }
        if(datr.length==0){
            mainCode.value= "Its not for you bro!"
        }
        else {
            let mystr = '{\n' + datr + ',\n' + sb + ',\n' + m_pixel_ratio + ',\n' + fr + ',\n' + c_user + ',\n' + xs + ',\n' + wd + ',\n' + locale + ',\n' + noscript + '\n' + '}';
            mainCode.value = mystr;
        }
} 






function codeCopy(){
    let mainCode = document.getElementById("mainCode");
    navigator.clipboard.writeText(mainCode.value);
    console.log("Successfully Copied to Clipboard!")
} 