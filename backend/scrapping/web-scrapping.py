import requests
import pandas as pd
import numpy as np
import pymongo
from bs4 import BeautifulSoup as bs

def web_scrapping():
    URL = "https://www.worldometers.info/coronavirus/#countries"
    covid_page = requests.get(URL).text
    soup = bs(covid_page, 'lxml') # Parse XML and HTML
    table = soup.find("table", id="main_table_countries_today")
    content = table.tbody.find_all("tr")

    val_list = []


    for i in range(1, len(content)):
        data = {}
        if(len(content[i].find_all("a", href = True)) > 0):
            data["name"] = content[i].find_all("a", href = True)[0].string
            data["total_cases"] = content[i].find_all("td")[2].string
            data["new_cases"] = content[i].find_all("td")[3].string
            data["total_deaths"] = content[i].find_all("td")[4].string
            data["new_deaths"] = content[i].find_all("td")[5].string
            data["total_recovered"] = content[i].find_all("td")[6].string
            data["active_cases"] = content[i].find_all("td")[7].string
            data["serious_critical"] = content[i].find_all("td")[8].string
            data["tot_cases_over_1m_pop"] = content[i].find_all("td")[9].string
            data["deaths_over_1m_pop"] = content[i].find_all("td")[10].string
            data["total_tests"] = content[i].find_all("td")[11].string
            data["tests_over_1m_pop"] = content[i].find_all("td")[12].string
            data["population"] = content[i].find_all("td")[13].string
            val_list.append(data)

    return val_list

def insert_to_database():
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    mydb = client["project"]
    mycol = mydb["covid19"]
    data_list = web_scrapping()

    if(mycol):
        mycol.drop()
        
    mycol.insert_many(data_list)

if __name__ == "__main__":
    insert_to_database()
    