module.exports = forwardMailBody = (
  first_name,
  last_name,
  email,
  mobile_number,
  company_name,
  job_title,
  industry,
  country,
  enquiry,
  comment
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Message</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <style type="text/css">
.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
  }
  .rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
  }
  .rollover span {
  font-size:0px;
  }
  u + .body img ~ div div {
  display:none;
  }
  #outlook a {
  padding:0;
  }
  span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
  }
  a.es-button {
  mso-style-priority:100!important;
  text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
  }
  .es-desk-hidden {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
  }
  .es-button-border:hover > a.es-button {
  color:#ffffff!important;
  }
@media only screen and (max-width:600px) {.es-m-p20b { padding-bottom:20px!important } *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:18px!important; line-height:120%!important } a.es-button, button.es-button, .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } .es-text-5665, .es-text-5665 p, .es-text-5665 a, .es-text-5665 h1, .es-text-5665 h2, .es-text-5665 h3, .es-text-5665 h4, .es-text-5665 h5, .es-text-5665 h6, .es-text-5665 ul, .es-text-5665 ol, .es-text-5665 li, .es-text-5665 span, .es-text-5665 sup, .es-text-5665 sub, .es-text-5665 u, .es-text-5665 b, .es-text-5665 strong, .es-text-5665 em, .es-text-5665 i { font-size:18px!important } .es-text-9977, .es-text-9977 p, .es-text-9977 a, .es-text-9977 h1, .es-text-9977 h2, .es-text-9977 h3, .es-text-9977 h4, .es-text-9977 h5, .es-text-9977 h6, .es-text-9977 ul, .es-text-9977 ol, .es-text-9977 li, .es-text-9977 span, .es-text-9977 sup, .es-text-9977 sub, .es-text-9977 u, .es-text-9977 b, .es-text-9977 strong, .es-text-9977 em, .es-text-9977 i { font-size:18px!important } .es-text-5805, .es-text-5805 p, .es-text-5805 a, .es-text-5805 h1, .es-text-5805 h2, .es-text-5805 h3, .es-text-5805 h4, .es-text-5805 h5, .es-text-5805 h6, .es-text-5805 ul, .es-text-5805 ol, .es-text-5805 li, .es-text-5805 span, .es-text-5805 sup, .es-text-5805 sub, .es-text-5805 u, .es-text-5805 b, .es-text-5805 strong, .es-text-5805 em, .es-text-5805 i { font-size:18px!important } .es-text-2886, .es-text-2886 p, .es-text-2886 a, .es-text-2886 h1, .es-text-2886 h2, .es-text-2886 h3, .es-text-2886 h4, .es-text-2886 h5, .es-text-2886 h6, .es-text-2886 ul, .es-text-2886 ol, .es-text-2886 li, .es-text-2886 span, .es-text-2886 sup, .es-text-2886 sub, .es-text-2886 u, .es-text-2886 b, .es-text-2886 strong, .es-text-2886 em, .es-text-2886 i { font-size:18px!important } .es-text-3698, .es-text-3698 p, .es-text-3698 a, .es-text-3698 h1, .es-text-3698 h2, .es-text-3698 h3, .es-text-3698 h4, .es-text-3698 h5, .es-text-3698 h6, .es-text-3698 ul, .es-text-3698 ol, .es-text-3698 li, .es-text-3698 span, .es-text-3698 sup, .es-text-3698 sub, .es-text-3698 u, .es-text-3698 b, .es-text-3698 strong, .es-text-3698 em, .es-text-3698 i { font-size:18px!important } .es-text-1357, .es-text-1357 p, .es-text-1357 a, .es-text-1357 h1, .es-text-1357 h2, .es-text-1357 h3, .es-text-1357 h4, .es-text-1357 h5, .es-text-1357 h6, .es-text-1357 ul, .es-text-1357 ol, .es-text-1357 li, .es-text-1357 span, .es-text-1357 sup, .es-text-1357 sub, .es-text-1357 u, .es-text-1357 b, .es-text-1357 strong, .es-text-1357 em, .es-text-1357 i { font-size:18px!important } .es-text-8199, .es-text-8199 p, .es-text-8199 a, .es-text-8199 h1, .es-text-8199 h2, .es-text-8199 h3, .es-text-8199 h4, .es-text-8199 h5, .es-text-8199 h6, .es-text-8199 ul, .es-text-8199 ol, .es-text-8199 li, .es-text-8199 span, .es-text-8199 sup, .es-text-8199 sub, .es-text-8199 u, .es-text-8199 b, .es-text-8199 strong, .es-text-8199 em, .es-text-8199 i { font-size:18px!important } .es-text-4811, .es-text-4811 p, .es-text-4811 a, .es-text-4811 h1, .es-text-4811 h2, .es-text-4811 h3, .es-text-4811 h4, .es-text-4811 h5, .es-text-4811 h6, .es-text-4811 ul, .es-text-4811 ol, .es-text-4811 li, .es-text-4811 span, .es-text-4811 sup, .es-text-4811 sub, .es-text-4811 u, .es-text-4811 b, .es-text-4811 strong, .es-text-4811 em, .es-text-4811 i { font-size:18px!important } .es-text-4654, .es-text-4654 p, .es-text-4654 a, .es-text-4654 h1, .es-text-4654 h2, .es-text-4654 h3, .es-text-4654 h4, .es-text-4654 h5, .es-text-4654 h6, .es-text-4654 ul, .es-text-4654 ol, .es-text-4654 li, .es-text-4654 span, .es-text-4654 sup, .es-text-4654 sub, .es-text-4654 u, .es-text-4654 b, .es-text-4654 strong, .es-text-4654 em, .es-text-4654 i { font-size:18px!important } .es-text-1376, .es-text-1376 p, .es-text-1376 a, .es-text-1376 h1, .es-text-1376 h2, .es-text-1376 h3, .es-text-1376 h4, .es-text-1376 h5, .es-text-1376 h6, .es-text-1376 ul, .es-text-1376 ol, .es-text-1376 li, .es-text-1376 span, .es-text-1376 sup, .es-text-1376 sub, .es-text-1376 u, .es-text-1376 b, .es-text-1376 strong, .es-text-1376 em, .es-text-1376 i { font-size:18px!important } .es-text-7293, .es-text-7293 p, .es-text-7293 a, .es-text-7293 h1, .es-text-7293 h2, .es-text-7293 h3, .es-text-7293 h4, .es-text-7293 h5, .es-text-7293 h6, .es-text-7293 ul, .es-text-7293 ol, .es-text-7293 li, .es-text-7293 span, .es-text-7293 sup, .es-text-7293 sub, .es-text-7293 u, .es-text-7293 b, .es-text-7293 strong, .es-text-7293 em, .es-text-7293 i { font-size:16px!important } .es-text-1074, .es-text-1074 p, .es-text-1074 a, .es-text-1074 h1, .es-text-1074 h2, .es-text-1074 h3, .es-text-1074 h4, .es-text-1074 h5, .es-text-1074 h6, .es-text-1074 ul, .es-text-1074 ol, .es-text-1074 li, .es-text-1074 span, .es-text-1074 sup, .es-text-1074 sub, .es-text-1074 u, .es-text-1074 b, .es-text-1074 strong, .es-text-1074 em, .es-text-1074 i { font-size:16px!important } .es-text-4796, .es-text-4796 p, .es-text-4796 a, .es-text-4796 h1, .es-text-4796 h2, .es-text-4796 h3, .es-text-4796 h4, .es-text-4796 h5, .es-text-4796 h6, .es-text-4796 ul, .es-text-4796 ol, .es-text-4796 li, .es-text-4796 span, .es-text-4796 sup, .es-text-4796 sub, .es-text-4796 u, .es-text-4796 b, .es-text-4796 strong, .es-text-4796 em, .es-text-4796 i { font-size:16px!important } .es-text-3127, .es-text-3127 p, .es-text-3127 a, .es-text-3127 h1, .es-text-3127 h2, .es-text-3127 h3, .es-text-3127 h4, .es-text-3127 h5, .es-text-3127 h6, .es-text-3127 ul, .es-text-3127 ol, .es-text-3127 li, .es-text-3127 span, .es-text-3127 sup, .es-text-3127 sub, .es-text-3127 u, .es-text-3127 b, .es-text-3127 strong, .es-text-3127 em, .es-text-3127 i { font-size:16px!important } .es-text-2961, .es-text-2961 p, .es-text-2961 a, .es-text-2961 h1, .es-text-2961 h2, .es-text-2961 h3, .es-text-2961 h4, .es-text-2961 h5, .es-text-2961 h6, .es-text-2961 ul, .es-text-2961 ol, .es-text-2961 li, .es-text-2961 span, .es-text-2961 sup, .es-text-2961 sub, .es-text-2961 u, .es-text-2961 b, .es-text-2961 strong, .es-text-2961 em, .es-text-2961 i { font-size:16px!important } .es-text-6500, .es-text-6500 p, .es-text-6500 a, .es-text-6500 h1, .es-text-6500 h2, .es-text-6500 h3, .es-text-6500 h4, .es-text-6500 h5, .es-text-6500 h6, .es-text-6500 ul, .es-text-6500 ol, .es-text-6500 li, .es-text-6500 span, .es-text-6500 sup, .es-text-6500 sub, .es-text-6500 u, .es-text-6500 b, .es-text-6500 strong, .es-text-6500 em, .es-text-6500 i { font-size:16px!important } .es-text-6332, .es-text-6332 p, .es-text-6332 a, .es-text-6332 h1, .es-text-6332 h2, .es-text-6332 h3, .es-text-6332 h4, .es-text-6332 h5, .es-text-6332 h6, .es-text-6332 ul, .es-text-6332 ol, .es-text-6332 li, .es-text-6332 span, .es-text-6332 sup, .es-text-6332 sub, .es-text-6332 u, .es-text-6332 b, .es-text-6332 strong, .es-text-6332 em, .es-text-6332 i { font-size:16px!important } .es-text-2203, .es-text-2203 p, .es-text-2203 a, .es-text-2203 h1, .es-text-2203 h2, .es-text-2203 h3, .es-text-2203 h4, .es-text-2203 h5, .es-text-2203 h6, .es-text-2203 ul, .es-text-2203 ol, .es-text-2203 li, .es-text-2203 span, .es-text-2203 sup, .es-text-2203 sub, .es-text-2203 u, .es-text-2203 b, .es-text-2203 strong, .es-text-2203 em, .es-text-2203 i { font-size:16px!important } .es-text-5586, .es-text-5586 p, .es-text-5586 a, .es-text-5586 h1, .es-text-5586 h2, .es-text-5586 h3, .es-text-5586 h4, .es-text-5586 h5, .es-text-5586 h6, .es-text-5586 ul, .es-text-5586 ol, .es-text-5586 li, .es-text-5586 span, .es-text-5586 sup, .es-text-5586 sub, .es-text-5586 u, .es-text-5586 b, .es-text-5586 strong, .es-text-5586 em, .es-text-5586 i { font-size:16px!important } .es-text-7739, .es-text-7739 p, .es-text-7739 a, .es-text-7739 h1, .es-text-7739 h2, .es-text-7739 h3, .es-text-7739 h4, .es-text-7739 h5, .es-text-7739 h6, .es-text-7739 ul, .es-text-7739 ol, .es-text-7739 li, .es-text-7739 span, .es-text-7739 sup, .es-text-7739 sub, .es-text-7739 u, .es-text-7739 b, .es-text-7739 strong, .es-text-7739 em, .es-text-7739 i { font-size:16px!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
</style>
 </head>
 <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#F6F6F6"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><h3 style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:24px;color:#333333"><strong>New form submission on CARISCA BUSINESS FORUM</strong></h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Someone just submitted a form on ${new Date().toLocaleString(
                        "en",
                        { dateStyle: "medium", timeStyle: "medium" }
                      )}.</p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0">
                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-7293" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">First name</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-5665" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${first_name}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-7739" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Last name</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-1376" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${last_name}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-6500" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Email</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-9977" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#3d85c6;font-size:18px"><a style="mso-line-height-rule:exactly;text-decoration:underline;color:#3d85c6;font-size:18px;line-height:27px" target="_blank" href="">${email}</a></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-2961" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Job title</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-4654" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${job_title}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-6332" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Company name</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-5805" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${company_name}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-3127" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Industry</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-4811" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${industry}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-2203" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Mobile number</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-2886" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${mobile_number}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-4796" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Country</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-8199" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${country}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;padding-bottom:20px"><!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
               <table class="es-left" cellspacing="0" cellpadding="0" align="left" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-5586" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Enquiry</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-3698" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${enquiry}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
               <table class="es-right" cellspacing="0" cellpadding="0" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:270px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="es-text-1074" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;letter-spacing:0;color:#999999;font-size:16px">Comment</p></td>
                     </tr>
                     <tr>
                      <td align="left" class="es-text-1357" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;letter-spacing:0;color:#333333;font-size:18px">${comment}</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table cellpadding="0" cellspacing="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;font-size:0">
                       <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" class="es-spacer" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://efnczkm.stripocdn.email/content/guids/CABINET_bd2f900c2ca5a0b09a0f6dcb5793c0b1966b3c7015bd7832a3898f355c86a0aa/images/trilogo.jpg" alt="" width="560" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:35px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Center for Applied Research and Innovation In Supply Chain — Africa</p><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">© Copyright <strong>CARISCA, KNUST</strong>. All Rights Reserved</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>
`;
