//package com.Travel_The_World.service.FileStorageService;
//
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//
//@Service
//public class FileStorageService {
//
//    private final Path fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();
//
//    public FileStorageService()
//    {
//        try{
//            Files.createDirectories(fileStorageLocation);
//        } catch (Exception ex)
//        {
//            throw new RuntimeException("Could not create upload directory.",ex);
//        }
//    }
//    public String storeFile(MultipartFile file) {
//        try {
//            String fileName=System.currentTimeMillis()+"_"+file.getOriginalFilename();
//            Path targetLocation=this.fileStorageLocation.resolve(fileName);
//            Files.copy(file.getInputStream(),targetLocation);
//            return targetLocation.toString();
//        }  catch (Exception ex)
//        {
//            throw new RuntimeException("File upload failed",ex);
//        }
//    }
//}

package com.Travel_The_World.service.FileStorageService;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileStorageService {

    private final Path fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();

    public FileStorageService() {
        try {
            Files.createDirectories(fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Could not create upload directory.", ex);
        }
    }

    public String storeFile(MultipartFile file) {
        try {
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation);
            // Return the relative path to the uploaded file
            return "/uploads/" + fileName;
        } catch (Exception ex) {
            throw new RuntimeException("File upload failed", ex);
        }
    }
}
