package com.Travel_The_World.service.user_management;

import com.Travel_The_World.model.User;
import com.Travel_The_World.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Registration {

    private static final Logger logger = LoggerFactory.getLogger(Registration.class);
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JavaMailSender mailSender;
    public String registerUser(User user){
        try {
            this.userRepository.save(user);
            String toEmail=user.getUserEmail();
            String bodyText="hi Mr."+user.getUserFirstName()+" "+user.getUserLastName()+"Thank you for registration,please confirm" +
                    "your registration by clicking on the below link";
            String link=" http://localhost:8080/register/"+"confirm/"+user.getUserId();
            SimpleMailMessage message=new SimpleMailMessage();
            message.setFrom("jahidhasansaif095@gmail.com");
            message.setTo(toEmail);
            message.setSubject("Mail for confirm registration");
            message.setText(bodyText+link);
            this.mailSender.send(message);
            return "mail sent successfully for confirmation";
        } catch (Exception e) {
            logger.error("Error during user registration", e);
            return "failed";
        }
    }
    public String confirmRegistration(Integer confirmToken){
        try{
            Optional<User> optionalUser=this.userRepository.findById(confirmToken);
            if(optionalUser.isPresent()){
                User user=optionalUser.get();
                user.setConfirmRegistration(true);
                this.userRepository.save(user);
                return "confirmation successfull.. now you can login.";
            }else {
                return "User with confirmation token"+confirmToken+"not found";
            }
        } catch (Exception e){
            logger.error("Error during user registration", e);
            return "failed";
        }


    }
}
