import Section from '@/section/Section';
import React from 'react'
import { Heading } from './ui/heading';
import { CompanyLogo } from './ui/card';
import { Slack } from 'lucide-react';
import { CompanyLogoData } from '@/constants/data';

const OurClients = () => {
  return (
    <Section className={'mt-12'} >
        <Heading
        title={"Our Client's"}
        description={"     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore corporis beatae qui quae est pariatur."}
        />
        <div className="grid grid-cols-4  ml-[10rem] p-12 max-lg:ml-0 max-lg:p-5">
        {CompanyLogoData.map((item) => {
          return (
            <CompanyLogo 
            key={item.id}
            icon={item.icon}
            />
          )
        })}
        </div>
    </Section>
  )
}

export default OurClients;