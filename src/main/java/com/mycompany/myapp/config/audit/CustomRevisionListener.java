package com.mycompany.myapp.config.audit;

import org.hibernate.envers.RevisionListener;

import com.mycompany.myapp.domain.audit.CustomRevisionEntity;
import com.mycompany.myapp.security.SecurityUtils;

public class CustomRevisionListener implements RevisionListener {

	@Override
	public void newRevision(Object revisionEntity) {
		CustomRevisionEntity entity = (CustomRevisionEntity) revisionEntity;
		entity.setAuditor(SecurityUtils.getCurrentLogin());
	}

}