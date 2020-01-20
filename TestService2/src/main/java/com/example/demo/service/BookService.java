package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.BookAlreadyExistsException;
import com.example.demo.exception.BookListEmptyException;
import com.example.demo.exception.BookNotFoundException;
import com.example.demo.model.Book;

public interface BookService {
	public Book saveBook(Book b) throws BookAlreadyExistsException;
	public Book getBookById(int id) throws BookNotFoundException;
	public void deleteBookById(int id) throws BookNotFoundException;
	public List<Book> findALL() throws BookListEmptyException;

}
