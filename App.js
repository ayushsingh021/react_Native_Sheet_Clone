/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {TextInput,Text, View, StyleSheet, Button, ScrollView} from 'react-native';
import Navbar from './components/Navbar';
import GridInputComponent from './components/Gridinput';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const App = () => {
  const [gridData, setGridData] = useState(Array(10).fill(Array(5).fill('')));
  useEffect(() => {
    handleLoadFromFile();
  }, []);

  //Cell Data changing 
  const handleCellChange = (value, row, col) => {
    const updatedGridData = gridData.map((rowData, rowIndex) =>
      row === rowIndex
        ? rowData.map((cell, colIndex) => (col === colIndex ? value : cell))
        : rowData
    );
    // console.log(updatedGridData);
    setGridData(updatedGridData);
  };
  //downlaading function
  const handleDownload = async () => {
    //storage premission cheak
    const permissionStatus = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  
    if (permissionStatus === RESULTS.GRANTED) {
    
      saveExcelFile();
    } else {
  
      const permissionRequestResult = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
  
      if (permissionRequestResult === RESULTS.GRANTED) {
       
        saveExcelFile();
      } else {
        
        console.error('Storage permission denied');
      }
    }
  };
  //excel file saving
  const saveExcelFile = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(gridData);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    // Excel File creation
    const excelFile = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });
  
    // file save path to downloads folder
    const filePath = `${RNFS.DownloadDirectoryPath}/google_sheets_clone.xlsx`;
  
    // Checking if the file exists before writing it
          RNFS.writeFile(filePath, excelFile, 'base64')
            .then(() => {
              console.warn("Excel file saved on "+filePath);
              console.log('Excel file saved successfully');
            })
            .catch((error) => {
              console.error('Error saving Excel file:', error);
            });
  };
  
  const handleLoadFromFile = async () => {

    const permissionStatus = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    if (permissionStatus === RESULTS.GRANTED) {

      loadExcelFile();
    } else {
      
      const permissionRequestResult = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

      if (permissionRequestResult === RESULTS.GRANTED) {
       
        loadExcelFile();
      } else {
       
        console.error('Storage permission denied');
      }
    }
  };

  const loadExcelFile = () => {
    const filePath = `${RNFS.DownloadDirectoryPath}/google_sheets_clone.xlsx`;

    RNFS.readFile(filePath, 'base64')
      .then((fileContent) => {
        // Parse the Excel file content using XLSX
        const workbook = XLSX.read(fileContent, { type: 'base64' });
        const worksheet = workbook.Sheets['Sheet1'];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Update the grid data with the loaded data
        console.log(data);
        setGridData(data);
        console.log('Excel file loaded successfully');
      })
      .catch((error) => {
        console.error('Error loading Excel file:', error);
      });
  };

  return (
    <View style={styles.container}>
    <View style={styles.navbar}>
    <Navbar handleDownload = {handleDownload}/>
    </View>
    <GridInputComponent
      gridData={gridData}
      onCellChange={handleCellChange}
    />
  </View>
  ); 
};

const styles = StyleSheet.create(
  {
    textItem: {
      margin :5 ,
      fontSize : 25,
      backgroundColor: 'blue',
      padding:5,
      color: "#fff",
      width :120,
      height:120,
      borderWidth : 2,
      textAlign :'center',
      textAlignVertical :'center',
      borderColor : 'red',
    },

    container: {
      flex: 1,
      padding: 10,
    },
  }
)
export default App;
