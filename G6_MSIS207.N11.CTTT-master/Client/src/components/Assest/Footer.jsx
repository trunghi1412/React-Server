import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from "styled-components";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';


  
  const Container = styled.div`
    display: flex;
    background-color: #f4f3ee;
  `;
  
  const Left = styled.div`
    margin-left: 250px;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>GROUP6.FIG</Logo>
          <Desc>
          Introduction GROUP6.FIG Shop
          Helping Young Vietnamese People Easily Access Japanese Figure Models
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookOutlinedIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Contact Us</Title>
          <List>
            <ListItem>Address: 01 Hoang Ba Dat, Tan Son Distric, Thanh Hoa City</ListItem> 
            <ListItem>Morning: 7AM To 11.30AM </ListItem>
            <ListItem>Phone: 0352665487</ListItem>
            <ListItem>Afternoon: 1PM To 5PM</ListItem>
            <ListItem>Email: Hiihiii1412@Gmail.Com</ListItem>
            <ListItem>Notification: If You Contact Us In Other Time, We Won't Answer !</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Customer Care</Title>
          <ContactItem>
            <RoomOutlinedIcon style={{marginRight:"10px"}}/> GROUP6.FIG
          </ContactItem>
          <ContactItem>
            <LocalPhoneOutlinedIcon style={{marginRight:"10px"}}/> 0352665487
          </ContactItem>
          <ContactItem>
            <MailOutlineOutlinedIcon style={{marginRight:"10px"}} /> StoreG6@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;