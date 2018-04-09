package com.bookk.web.mapper;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface Mapper {
	public HashMap<?, ?> mallCartCount(HashMap<?, ?> map);
}
