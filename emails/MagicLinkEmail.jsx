import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components'

export const MagicLinkEmail = ({ url, host }) => {
  const baseUrl = `https://${host}`

  return (
    <Html>
      <Head />
      <Preview>Confirm your email address</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/images/logo.png`}
              width="120"
              height="120"
              alt="Лого"
            />
          </Section>
          <Heading style={h1}>Регистрация на {host}</Heading>
          <Text style={heroText}>
            Перейдите по указанной ниже ссылке для завершения регистрации
          </Text>

          <Section style={codeBox}>
            <Text style={confirmationCodeText}>
              <a href={url} target="_blank">
                Перейти на сайт
              </a>
            </Text>
          </Section>

          <Text style={text}>
            Если вы получили данное сообщение по ошибке, просто проигнорируйте
            его
          </Text>

          <Section>
            <Row style={footerLogos}>
              <Column style={{ width: '66%' }}>
                <Img
                  src={`${baseUrl}/images/logo.png`}
                  width="100"
                  height="100"
                  alt="Лого"
                />
              </Column>
              <Column>
                <Section>
                  <Row>
                    <Column>
                      <Link href="/">
                        <Img
                          src={`${baseUrl}/images/facebook.png`}
                          width="32"
                          height="32"
                          alt="Facebook"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/">
                        <Img
                          src={`${baseUrl}/images/instagram.png`}
                          width="32"
                          height="32"
                          alt="Instagram"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/">
                        <Img
                          src={`${baseUrl}/images/twitter.png`}
                          width="32"
                          height="32"
                          alt="Twitter"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                    <Column>
                      <Link href="/">
                        <Img
                          src={`${baseUrl}/images/whatsapp.png`}
                          width="32"
                          height="32"
                          alt="Whatsapp"
                          style={socialMediaIcon}
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>

          <Section>
            <Link
              style={footerLink}
              href="https://slackhq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our blog
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/legal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policies
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help center
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href="https://slack.com/community"
              target="_blank"
              rel="noopener noreferrer"
              data-auth="NotApplicable"
              data-linkindex="6"
            >
              Slack Community
            </Link>
            <Text style={footerText}>
              ©2022 Slack Technologies, LLC, a Salesforce company. <br />
              500 Howard Street, San Francisco, CA 94105, USA <br />
              <br />
              All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default MagicLinkEmail

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left',
  marginBottom: '50px'
}

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline'
}

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  width: '100%'
}

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px'
}

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
}

const container = {
  margin: '0 auto',
  padding: '0px 20px'
}

const logoContainer = {
  marginTop: '32px'
}

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px'
}

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px'
}

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginBottom: '30px',
  padding: '40px 10px'
}

const confirmationCodeText = {
  fontSize: '30px',
  textAlign: 'center',
  verticalAlign: 'middle'
}

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px'
}
