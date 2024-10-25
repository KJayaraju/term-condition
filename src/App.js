import React from 'react';
import Footer from './components/footer';
import EmailButton from './components/email';
import { Container, Typography, List, ListItem, Paper, Box } from '@mui/material';
import { AppBar, Toolbar, Button } from '@mui/material';
function NavBar() {
  return (<div>
    <AppBar position="fixed" sx={{ backgroundColor: '#e8e6e6',height:'80px'}}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1}}>
        <a  href="https://web-dev.letsnotify.co.in/"><img style={{height:'30px',width:'50px'}} src="data:image/png;base64,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"></img>
        |<Button sx={{ Color: '#0b0b0b', }} href="https://web-dev.letsnotify.co.in/">Qwik notify</Button></a>
        </Typography>
        <Button sx={{ Color: '#0b0b0b' }} href="https://web-dev.letsnotify.co.in/">Home</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}

function App() {
  return (<div>
    <div>
    <NavBar /></div>
    <div className="term">
    <Container maxWidth="md" style={{ marginTop: '80px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box mb={4}>
          <h1></h1>
          <Typography variant="h4" align="center" gutterBottom>
            Terms and Conditions
          </Typography>
        </Box>

        <List>
          <ListItem>
            <Typography variant="body1">
              <h1>1.Intoduction</h1>
              The Site (defined hereinafter), www.qwiknotify.com is owned, hosted and operated by M/s. NotifySuite Techonology India Pvt Ltd.
              The following terms and conditions, together with any documents referred to<b>(“Terms of Use”)</b>incorporated herein constitute a legally binding agreement
               made by and between NotifySuite Techonology India Pvt Ltd, a company incorporated under the laws of provisions of Indian Companies Act, 1956 <b>(hereinafter referred to as “the Company” or “Qwiknotify”
                or “we” or “our” or “us” and its successors and assigns)</b> and whether personally or on behalf of an entity or any person <b>(hereinafter referred to as “you,” “your” or “yourself” or “user”)</b>, concerning your access to concerning your access to and use of the “www.qwiknotify.com” website/application as well as any other media form, media channel, mobile website related linked, or otherwise connected thereto (collectively, the “Site”). The Site provides an online facility to send push notifications to your users. In order to make the Site a secure environment, all users are required to accept and comply with these Terms and Conditions..
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <h1>2.USING OUR SERVICES</h1>
            The Terms of Use contained herein along with the Privacy Policy (captured under a separate link), form an agreement regulating the relationship with regard to the use of the Site. These Terms of Use constitute a legally binding agreement between you and the Company and shall govern the use of the Site. You shall be required to read and accept these Terms of Use for availing the services. Therefore, it is clarified that use and access of the Site by the user constitutes an acknowledgement and acceptance by the user of these Terms of Use.
            <b>BY ACCESSING, BROWSING OR OTHERWISE USING THE SITE YOU AGREE AND ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE. IF AT ANY TIME YOU DO NOT AGREE WITH ALL OR ANY OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND/OR SERVICES OFFERED HEREIN AND YOU MUST DISCONTINUE USE OF THE SITE IMMEDIATELY.</b>The Company reserves the right to revise and update these Terms of Use at any time and for any reason in its sole discretion, by posting changes at www.qwiknotify.com (or another URL that the Company may provide from time to time). You are expected to keep yourself updated with these Terms of Use. You will be subject to and will be deemed to have been made aware of and kept up to date of such revised Terms of Use. 
            If You do not agree to the modified Terms of Use, you should discontinue use of the Site and/or Services.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>3.SERVICES TO BE OFFERED BY THE SITE</h1>
           The Company offers a platform that facilitates Push Notifications (“Services”) by or through www.qwiknotify.com( Note: please incorporate the various modes of providing services E.g. website/mobile applications) to its end users i.e. “Consumers”. The Terms of Use set out hereof, exclusively regulate the offer, transmission and acceptance of Services offered by the Site between the user of Site and the Company. However, use of the Site, supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. The Company reserves the right, in its sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject to any registration requirement within such jurisdiction or country. 
            Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>4.ELIGIBILITY TO USE SITE</h1>
               For availing the facilities provided herein, you shall comply with the eligibility criteria before using the facilities provided by the Site.
The use of the Services is available only to the Person (defined hereinafter) who can form legally binding contract as per your local laws or under Indian Contract Act, 1872. Persons who are "incompetent to contract" within the meaning of respective local laws including minors, un-discharged insolvents etc. are not eligible to register on the Site or use the Services.
The Company reserves rights to reject or grant access to a new user or terminate the access of existing user(s), at any time without prior intimation and without cause.
In general, a Person who has attained the age of (18) eighteen years is not considered a minor. However, we advise to check your local laws to comply with the provisions.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>5.SIGNUP/ REGISTRATION</h1>
              <ul type="square">
                <li>You shall be required to register on Site, which shall be made available only to person(s) who meet or fulfill the eligibility terms as specified herein.</li>
                <li>You shall be required to register on Site to avail Services, the option of registration is available exclusively to the person who meets or fulfil the eligibility criteria as specified herein.</li>
                <li>The registration process enables You to access the Services or use the Services. You shall be required to register on the Site by providing username, email address, name, cell-phone number, password, et al. You shall be requested to upload or provide an identity proof at the time of registration or thereafter in order to comply with the legal provisions of the respective jurisdiction.</li>
                <li>You shall be responsible for maintaining the confidentiality of your username/ display name and password and for all activities that occur under/ from your account. You agree and acknowledge that you will provide accurate, complete and updated information in order to register on the Site to use the Services.</li>
                <li>You further covenant that if any information is found untrue, inaccurate or incomplete or the Company identifies reasonable grounds to suspect that such information is untrue, inaccurate, not current, incomplete, or not in line with the Terms of Use, the Company shall have the right to forthwith suspend or terminate or block access of your account and refuse to provide the access to the Site.</li>
              </ul>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>6.REPRESENTATIONS</h1>
               <ol type="A"> <li><h2>User Representations :</h2></li>
<b>By using the Site, user/ you represent and warrant that</b>
<ul type="disc">
<li>all registration information will be true, accurate, current, and complete.</li>
<li>you will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
<li>you have the legal capacity and you agree to comply with these Terms of Use</li>
<li>you are not a minor in the jurisdiction in which you reside</li>
<li>you will not access the Site through automated or non-human means, whether through a script or otherwise</li>
<li>you will not use the Site for any illegal or lawful purpose</li>
<li>you shall not use the Services in a manner that it</li>
<li>infringes or violates the intellectual property rights or any other rights of any third party</li>
violates any law or regulation,
is harmful, fraudulent, deceptive, threatening, harassing, defamatory, obscene, or otherwise objectionable,
attempts, in any manner, to obtain the password, account, or other security information from any other user(s), and
violates the security of any computer network, or cracks any passwords, or security encryption codes.
<li>In all of the above conditions, the Company has the right to suspend or terminate your account and refuse any and all current or future use of the Site.</li>
</ul>

<li><h2>Company’s Representation:</h2></li>

It is dully incorporated under the law and it has the full power, right and authority to execute this arrangement and perform its obligations.
It has obtained all necessary approvals, consents, sanctions or authorizations required to enter into and perform these Terms of Use and no other approvals, consents, sanctions or authorizations of any regulatory authority or any other person are required to be obtained by it for the execution, delivery and performance of these Terms of Use.
The Site and all Services made available to you through this Site are provided on "as is" basis without any representations or warranties except otherwise provided in writing. The execution, delivery and performance of this arrangement does not constitute a breach of applicable laws, its charter documents or any agreement, arrangement or understanding, oral or written, executed by it.
You understand and agree that the content of the Site does not contain or constitute representations to be reasonably relied upon and agrees not to hold the Company liable from any errors, omissions, or misrepresentations contained within the Site’s content.
Notwithstanding anything contained herein to the contrary, the Company does not represent and warrant the safety, effectiveness, adequacy, accuracy, availability, or legality of any of the information contained or displayed on the Site or offered through the Site.
</ol>  </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>7.USE OF MATERIALS</h1>
              Without prejudice as expressly indicated herein, the Company hereby grants you a non-exclusive, revocable (upon notice from Company), non-transferable access to view, download and print Services catalogue or any other materials available on the Site, subject to the following conditions:
<ul type="disc"><li>You may access and use the materials solely for own purposes and in accordance with the Terms of Use;</li>
<li>You may not modify or alter product catalogues or any other materials in which Company’s rights subsists.</li>
<li>You may not remove any text, data, copyright, et al. contained in the Services or any other materials; Any software that is available on the Site is the property of the Company and you shall not use, download or install the software, unless otherwise expressly permitted by the Company.</li>
</ul>
<b>We may also collect the following information:</b>
<ol><li>About the pages you visit / access</li>
<li>The links you click</li>
<li>The number of times you access a page</li>
</ol>

            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>8.PAYMENT</h1>
              We intend to remain free monetization, but for any external factors, if we make Qwiknotify and any of our other products paid. The following conditions for payment will apply.
You agree to provide current, complete, and accurate information for all Services availed by you via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that the Company can complete your transaction and contact you as if needed. All the prices are exclusive of taxes the same will be added to the service price as per the applicable laws.<br/>
<b>We will accept the following methods of payment:</b>
<ol>
<li>MasterCard (Credit/ Debit card)</li>
<li>Visa (Credit/ Debit card)</li>
<li>American Express (Credit/ Debit card)</li>
<li>Net banking</li>
</ol>
You hereby undertake and agree to pay all/ complete charges in advance in consideration of Services and any applicable taxes, and you authorize us to charge your chosen payment provider for any such amounts. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received the payment.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>9.INTELLECTUAL PROPERTY RIGHTS</h1>
              <ul type="disc"><li>“Intellectual Property” shall mean and include patents, trademarks, service marks, trade names, registered designs, copyrights, rights of privacy and publicity and other forms of intellectual or industrial property, know how, confidential or secret processes, trade secrets, any other protected rights or assets and any licenses and permissions in connection therewith, whether or not registered or pending registrations and for the full period thereof, all extensions and renewals thereof.</li>

              <li>The information provided on the Site and the processes are our confidential and proprietary property, including but not limited to all text, graphics, user interfaces, visual interfaces, software(s), database, code, design etc. (if any), (collectively, the “Content”) on the Site are owned and controlled by the Company. The trademarks, service marks, and logos contained therein (collectively, the “Marks”) are owned or controlled by the Company or licensed to Company, and are protected by copyright, patent and trademark laws, and various other intellectual property laws.</li>

<li>The Company owns all rights to the trademark “Qwiknotify” and variants thereof. In addition to the aforesaid, the Company owns all rights in the domain name including without limitation, any and all rights, title and interests in and to the copyright, related rights, know-how, goodwill, icons and hyperlinks. You hereby promise to abide by all copyright, trademark and other intellectual property rules and shall not use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, sell or otherwise exploit for any purpose without the prior written consent of the Company.</li>

<li>The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site, Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. Subject to the information disclosed by you at the time of registration that you are eligible to use the Site, you are granted a limited license to access and use the Site to which you have properly gained access solely for your business use.</li>

<li>THE COMPANY RESERVES ALL RIGHTS EXPRESSLY GRANTED TO YOU IN AND TO THE SITE, THE CONTENT AND THE MARKS.
</li>
</ul>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>10.CONFIDENTIAL INFORMATION</h1>
              <ul type="disc"><li>You shall be bound to comply and abide with all the Terms of Use hereof and all guidelines that may be communicated by the Company to you. You shall be bound to maintain strict confidentiality with respect to all information provided by the Company to you including but not limited to Intellectual Property. All information shall be kept strictly confidential by you and shall not without prior written consent of the Company be divulged and/or disclosed to a third party.</li>

              <li>You further understand and acknowledge that any disclosure or unauthorized use of Confidential Information is in violation of Terms of Use and shall cause the Company irreparable harm, the amount of which may be difficult to ascertain and, therefore, you agree that the Company shall have the right to apply to a court of competent jurisdiction for an order restraining any such further disclosure or unauthorized use and for such other relief as the Company deems appropriate. Such right of the Company shall be exercisable in addition to the remedies otherwise available at law or in equity.</li>
</ul> </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>11.PROHIBITED ACTIVITIES</h1>
             You may not access or use the Site for any purpose other than the use or avail the benefits of the Services. The Site may not be used in connection with any commercial endeavors (except those that are specifically endorsed or approved by the Company) including but not limited to:
             <ul type='disc'>
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from the Company</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of the users by electronic or other means for the purpose of sending unsolicited email, or creating user account(s) by automated means or under false pretenses</li>
              <li>Make improper use of Our support services or submit false reports of abuse or misconduct.</li>
              <li>Defraud, or mislead us and other users, especially in any attempt to hack sensitive account information such as user passwords.</li>
              <li>Engage in unauthorized framing of or linking to the Site.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
              <li>Sell or otherwise transfer your profile.</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person or third-party.</li>
              <li>Use the Site as part of any effort to compete with the Company or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise without the permission of the Company.</li>
              <li>Decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
              <li>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, etc.</li>
              <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics, web bugs, cookies, or other similar devices (sometimes referred to as “spyware”).</li>
              <li>Except as may be the result of standard search engine or internet browser usage, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
              <li>Decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
</ul></Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>12.CONTRIBUTION LICENSE</h1>
              <ol><li>By posting your contributions in the form of reviews/ comments/ feedback to any part of the Site (collectively, the“Contributions” ) or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to the Company an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.</li>

              <li>This license will apply to any forms, media, or technology now known or hereafter developed, and includes use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</li>

              <li>The Company has the right, in its sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. Notwithstanding the foregoing, the Company has no obligation to monitor your Contributions.</li>
</ol>

            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>13.GUIDELINES FOR CONTRIBUTIONS</h1>
            We may provide you areas on the Site to leave Contributions. When posting Contributions, you must comply with the following criteria:
<ul type="disc"><li>you should have firsthand experience with the person/entity;</li>
<li>your Contributions should not contain offensive profanity, or abusive, racist, offensive, or hate language</li>
<li>your Contributions should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability</li>
<li>your Contributions should not contain references to illegal activity</li>
<li>you should not be affiliated with competitors if posting negative Contributions</li>
<li>you may not post any false or misleading statements; </li>
<li>you may not organize a campaign encouraging others to post reviews/feedbacks, whether positive or negative.</li></ul>
We may accept, reject, or remove Contributions in our sole discretion. We have absolutely no obligation to screen Contributions or to delete Contributions, even if anyone considers the Contributions objectionable or inaccurate. Contributions are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any Contributions. By posting Contributions, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sub-licensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to Contribution.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>14.SOCIAL MEDIA</h1>
             As part of the functionality of the Site, you may link your account with online accounts you have with third-party service providers (each such account, a“Third -Party Account” ) by either:
             <ol><li>providing your Third-Party Account login information through the Site; or
allowing us to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent and warrant that you are entitled to disclose your Third-Party Account login information to us and/or grant us access to your Third-Party Account, without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account, and without obligating us to pay any fees or making us subject to any usage limitations imposed by the third-party service provider of the Third-Party Account.</li>
By granting us access to any Third-Party Accounts, you understand that
<ul type="square"><li>we may access, make available, and store (if applicable) any content that you have provided to and stored in your Third-Party Account (the “Social Network Content” ) so that it is available on and through the Site via your account, including without limitation any friend lists;</li>
<li>we may submit to and receive from your Third-Party Account additional information to the extent you are notified when you link your account with the Third-Party Account. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts may be available on and through your account on the Site. Please note that if a Third-Party Account or associated service becomes unavailable or our access to such Third-Party Account is terminated by the third-party service provider, then Social Network Content may no longer be available on and through the Site. You will have the ability to disable the connection between your account on the Site and your Third-Party Accounts at any time.
<b>PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S)</b> WITH SUCH THIRD-PARTY SERVICE PROVIDERS. The Company makes no effort to review any Social Network Content for any purpose, including but not limited to, for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content. You acknowledge and agree that we may access your email address book associated with a Third-Party Account and your contacts list stored on your mobile device or tablet computer solely for purposes of identifying and informing you of those contacts who have also registered to use the Site. You can deactivate the connection between the Site and your Third-Party Account by contacting us using the contact information (support@qwiknotify.com)<EmailButton/> or through your account settings (if applicable). We will attempt to delete any information stored on our servers that was obtained through such Third-Party Account, except the username and profile picture that become associated with your account.</li>
</ul></ol>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>15.SUBMISSIONS</h1>
              You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, advice or other information regarding the Site ("Submissions") provided by you are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without providing any acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original or that you have the right to submit such Submissions. You agree there shall be no recourse against the Company for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>16.SUBMISSIONS</h1>
           The Company holds and reserves the right, but not the obligation, to:<br/>
Monitor the Site for violations of these Terms of Use;<ul type="disc">
<li>Take appropriate legal action against anyone who, in our sole discretion, violates or intend to violate the laws or these Terms of Use, including without limitation, reporting such user to law enforcement authorities;</li>
<li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;</li>
<li>In our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and</li>
<li>Manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</li>
</ul>  </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>17.COPYRIGHT INFRINGEMENTS</h1>
              We respect the intellectual property rights of others. If you believe that any material available on or through the Site infringes upon any copyright you own or control, please immediately notify the Company using the contact information provided (support@qwiknotify.com)<EmailButton /> (a <b>“Notification”</b>). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable laws you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your copyright, you should consider first contacting an attorney.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>18.TERMINATION</h1>
              These Terms of Use shall remain in full force and effect while you use the Site. The Terms will continue to apply until terminated by either you or the Company as set forth below.

If you want to terminate your agreement with the Company, you may do so by:
<ul type="disc">
<li>Not accessing the Site; ORclosing / deleting of your account (You can write to support@qwiknotify.com<EmailButton /> for account and data deletion).
</li>
<li>Without limiting any other provision of these Terms of Use, the Company reserves the right to, at its discretion and at any time without notice or liability, deny access to use or terminate your account (including blocking certain IP addresses), to any person for any cause or for no cause, including without limitation for breach of any representation, warranty, or covenant contained in these Terms of Use or of any applicable law or regulation if:-
breach of any provisions of the Terms of Use, the Privacy Policy or any other terms, conditions, or policies that may be applicable to you
Company has elected to discontinue, with or without reason, access to the Site, the Services (or any part thereof) specifically to you; or
For technical or any other reason.</li></ul>

Termination or suspension may include:
<ol type='*'><li>Removal of access to all or portion of the offerings on the Site or with respect to the Services or any portion thereof</li>
<li>Deletion of your account and the information thereof</li>
<li>In addition to terminating or suspending your account, the Company reserves the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</li>
<li>You hereby agree and acknowledge that upon termination for whatsoever reason, you will stop or refrain Yourself from using the Site or any Services provided hereunder and forthwith will return all confidential information, proprietary information and intellectual property of the Company (if any).</li>
<li>Your sole right to terminate these Terms of Use is by deleting your account or not accessing the Site.</li>
</ol>

            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>19.MODIFICATIONS AND INTERRUPTIONS</h1>
              <ul type="square"><li>The Company reserves the right to change, modify, alter, or remove the contents of the Site at any time or for any reason at its sole discretion without notice. However, we have no obligation to update any information on our Site.</li>
              <li>The Company also reserves the right to modify or discontinue all or part without notice at any time.</li>
              <li>The Company will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.</li>
              <li>The Company cannot guarantee the Site will be available at all times as may experience hardware, software, or other problems including all the technical issues or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.</li>
              <li>You agree that the Company has no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site.</li></ul>
Nothing in these Terms of Use will be construed to obligate the Company to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>20.DISCLAIMER OF WARRANTIES</h1>
            <ul type="square"><li>EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” AND WITHOUT WARRANTY OF ANY KIND. YOU AGREE THAT YOUR USE OF THE SERVICES IS AT YOUR RISK. THE COMPANY MAKES NO WARRANTIES OF ANY KIND TO YOU OR ANY THIRD PARTY WITH RESPECT TO THE SERVICES, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OPERABILITY OR NON-INFRINGEMENT, AND ALL SUCH WARRANTIES ARE HEREBY EXCLUDED BY THE COMPANY AND WAIVED BY YOU. FOR EXAMPLE, WE DO NOT MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE OPERATION OF THE SERVICES, THE OUTPUT OF THE SERVICES, OR THE RESULTS FROM THE SERVICES.</li>

            <li>For greater certainty, the Company does not make any guarantee that the Services will be uninterrupted, error-free, or completely secure. You acknowledge that there are risks inherent in technology introduced in the Services including but not limited to servers, networks, programming and other related technology that could result in the loss of your business, profits, privacy, confidential information and property. Notwithstanding the foregoing, the Company shall provide full support in case any error or bug in the Services subject to you shall be responsible for all or any loss of profit, or damage cause to you.</li></ul>


            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>21.GOVERNING LAW AND DISPUTE RESOLUTION</h1>
            <ul type="square"><li>All disputes, differences relating to these Terms of Use, its enforceability or its termination under these Terms of Use and your use of the Site or any interpretation thereof are governed by and will be construed under the laws of India, without regard to its conflict of law principles, thereof, unless prohibited by law.</li>
            <li>Any legal suit, proceedings or action of whatever nature arising out of, or related to, these Terms of Use or the Site, brought either by you or the Company (collectively, the “Parties” and individually, a “Party”) shall be commenced or prosecuted in the courts of Hyderabad(India), and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non convenience with respect to venue and jurisdiction.</li></ul>
THIS CLAUSE SHALL SURVIVE THE TERMINATION OR EXPIRY OF THE TERMS OF USE.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>22.CORRECTIONS</h1>
              There may be information on the Site that contains typographical errors, inaccuracies, omissions or mistakes, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, omissions or mistakes and to change, modify, alter or update the information on the Site at any time, without prior notice.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>23.NOTICES</h1>
              <ul type="disc"><li>Any notices, requests, complaints, queries, demands and any other communications required or permitted to submit in relation to above or any other circumstances that arise due to the use of the Site or under these Terms of Use shall be communicated at support@qwiknotify.com<EmailButton /></li>

              <li>User understands that there may be instances of difficulty in accessing or receiving said notices and the Company will not responsible in any case if any email or replies to the user’s notices, requests, complaints, queries or demands, in any case, if not delivered or if user do not see the email or reply or if user has given us an incorrect email id or address or for any other reason.
</li></ul></Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>24.INDEMNIFICATION</h1>
              You hereby agree and undertake to indemnify and keep indemnified the Company and its representatives against all claims, demands, damages, penalties, costs or expenses of any kind which may arise against or be incurred by the Company (including reasonable attorney’s fees and expenses) to the extent of direct and actual loss and/or damages adjudicated by the competent court of law.
<ol type="a"><li>As a result of any violation of the Terms of Use or Privacy Policies,</li>
<li>Any act, omission or commission, negligence or failure to comply with Your obligations provided hereunder;</li>
<li>Breach of representation and warranties set forth herein;</li>
<li>Any harmful act toward the Company or any other user of the Site;</li>
<li>Claim for any amounts in respect of loss of business, lost profits, multiple of profits, goodwill, business reputation, consequential damages or punitive damages caused to you due to any error(s) or bug(s) in the technology.</li>
</ol> </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
            <h1>25.LIMITATIONS OF LIABILITY</h1>
              <ul type="square"><li>NOT WITHSTANDING ANYTHING CONTAINED HEREIN TO THE CONTRARY, IN NO EVENT SHALL THE COMPANY’S AGGREGATE LIABILITY HEREUNDER FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF ACTION, EXCEED THE SERVICE AMOUNT PAID IN PRECEDING SIX (6) MONTHS BY YOU TO THE COMPANY.</li>

<li>IN NO EVENT THE COMPANY OR ITS DIRECTORS, EMPLOYEES, AGENTS, AFFILAIATES, OFFICERS OR VENDORS SHALL BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST OF PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES OR EXPENSES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</li></ul>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <h1>26.ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h1>
              <ul type="square"><li>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications We provide to You electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.</li>

              <li><b>YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE</b></li>

              <li>You hereby waive all and any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</li></ul>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="body1">
              <h1>27.MISCELLANEOUS</h1>
              <ul type='square'><li>The Company may assign, in whole or in part, its rights and obligations to others at any time. The Company shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.</li>
              <li>If any term or provision of the Terms of Use is found by a court of competent jurisdiction to be invalid, illegal or otherwise unenforceable, the same shall not affect the other terms or provisions thereof or the whole of the Terms of Use, but such term or provision will be deemed modified to the extent necessary in the court's opinion to render such term or provision enforceable, and the rights and obligations of the parties will be construed and enforced accordingly, preserving to the fullest permissible extent the intent of the Terms of Use of the parties herein set forth</li>
              <li>The relationship between the Company and You shall be that of an independent contractor, and nothing herein should be construed to create a partnership, joint venture, or employer-employee relationship. Each party shall, at all times during the term, perform the duties and responsibilities herein without any control by the other party.</li>
              <li>The Company shall not be stood to perform under these Terms of Use as a result of occurrence of any Force Majeure events like acts of God, fire, wars, civil unrest, change in laws, rules and regulations or any other events affecting the performance of the Company.</li>
              <li>The Company and you agreed that the arrangement set out by these Terms and Conditions are on a non-exclusive basis</li>
              <li>These Terms of Use constitute the entire agreement and understanding of the between the Company and You and shall supersede any prior understanding or representation of any kind preceding the date of the Terms of Use.</li>
              <li>You agree that these Terms of Use will not be construed against the Company by virtue of having drafted them. You hereby waive any and all defenses You may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</li>
              <li>You can contact our Customer Care for any information or help on support@qwiknotify.com<EmailButton />. The Company to the best of its abilities will try to resolve Your quer(y/ies).</li>
</ul></Typography>
          </ListItem>
        </List>
      </Paper>
    </Container>
    </div>
    <Footer />
    </div>
  );
}

export default App;
