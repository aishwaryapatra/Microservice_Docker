package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.UserExistsException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepo;

	@Autowired
	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}

	public void registerUser(User user) throws UserExistsException {
		Optional<User> optUser = userRepo.findById(user.getUsername());
		if (optUser.isPresent()) {
			throw new UserExistsException();
		}
		userRepo.save(user);
	}


}
