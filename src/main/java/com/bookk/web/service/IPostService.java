package com.bookk.web.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;

@Service
public interface IPostService {
	public Object execute(HashMap<?, ?> map);
}
