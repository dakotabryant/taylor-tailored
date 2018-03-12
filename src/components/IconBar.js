import React from 'react';
import Section from './Section';
import Icon from './Icon';
import { Fade } from 'react-reveal';

const IconBar = props => {
	const { icons } = props;
	return (
		<Section className="icon-bar">
			<div className="icon-bar__inner-container">
				{icons &&
					icons.map(icon => {
						return (
							<Fade left>
								<div key={icon.name} className="icon-bar__text-containers">
									<img src={icon.path} className="icon-bar__icons" />
									<p>{icon.name}</p>
								</div>
							</Fade>
						);
					})}
			</div>
		</Section>
	);
};

export default IconBar;
