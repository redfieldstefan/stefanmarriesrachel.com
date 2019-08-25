import React from 'react';
import classnames from 'classnames';
import '../styles/page.css'

const Page = ({className, children, ...rest}) => {
	return (
		<div className={classnames('Page', className)} { ...rest }>
			{children}
		</div>
	);
};

export default Page;