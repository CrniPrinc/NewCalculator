import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import '../../app.css';
import Income from '../display/income';
import IncomeDetails from '../input/incomeDetails';
import styles from './container.module.css';

const Container = () => {
    const [income, setIncome] = useState('');
    const [incomeButton, setIncomeButton] = useState('');
    const [activeTab, setActiveTab] = useState('details');
    const [tabIndex, setTabIndex] = useState(0);
    const [optionSelected, setOptionSelected] = useState('1');
    const [data, setData] = useState([]);
    const [netIncome, setNetIncome] = useState(null);
    const [activeNet, setActiveNet] = useState('');
    const [activeGross, setActiveGross] = useState('');

    return (
        <Tabs
            onSelect={() => {}}
            selectedIndex={tabIndex}
            className="flex flex-row gapy-1 w-full"
        >
            <TabList className="flex flex-col gap-1 ">
                <Tab
                    className={`${
                        styles.tabButton
                    }  button p-2 w-full text-center ${
                        activeTab === 'details'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white border-gray-300 text-black'
                    }`}
                    onClick={() => {
                        setTabIndex(0);
                        setActiveTab('details');
                    }}
                >
                    Income details
                </Tab>
                <Tab
                    className={`${
                        styles.tabButton
                    }  button p-2 w-full text-center ${
                        activeTab === 'income'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white border-gray-300 text-black'
                    }`}
                    onClick={() => {
                        setTabIndex(1);
                        setActiveTab('income');
                    }}
                >
                    Income
                </Tab>
            </TabList>

            <TabPanel className={styles.tabPanel}>
                <IncomeDetails
                    income={income}
                    setIncome={setIncome}
                    setTabIndex={setTabIndex}
                    setActiveTab={setActiveTab}
                    setOptionSelected={setOptionSelected}
                    setIncomeButton={setIncomeButton}
                    setData={setData}
                    incomeButton={incomeButton}
                    optionSelected={optionSelected}
                    activeNet={activeNet}
                    activeGross={activeGross}
                    setActiveGross={setActiveGross}
                    setActiveNet={setActiveNet}
                />
            </TabPanel>
            <TabPanel className={styles.tabPanel}>
                <Income
                    setNetIncome={setNetIncome}
                    netIncome={netIncome}
                    data={data}
                    option={optionSelected}
                />
            </TabPanel>
        </Tabs>
    );
};

export default Container;
