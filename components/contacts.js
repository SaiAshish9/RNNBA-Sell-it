import React, {useState} from 'react';
import Contacts from 'react-native-contacts';
import {
  ScrollView,
  Button,
  PermissionsAndroid,
  Platform,
  Text,
  requestMultiple,
  FlatList,
  Dimensions
} from 'react-native';

const {height,width}=Dimensions.get('window')

const Contact = () => {
  const [list, setList] = useState([]);

  const requestContactPermissions = async () => {
    if (Platform.OS === 'ios') {
      return true;
    } else {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      ]);

      // PermissionsAndroid.RESULTS.GRANTED
      if (
        granted['android.permission.READ_CONTACTS'] === 'granted' &&
        granted['android.permission.WRITE_CONTACTS'] === 'granted'
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const getContacts = () => {
    requestContactPermissions().then((didGetPermission) => {
      if (didGetPermission) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            console.log(err);
            throw err;
          }
          //   console.log(contacts[0]['displayName'])
          setList(contacts);
          console.log(contacts[0]['recordID'],contacts[0]['displayName'],list)
        });
      } else {
        // alert('no permission');
      }
    });
    // Contacts.getAll((err, contacts) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.warn(contacts);
    // });
  };

  return (
    <ScrollView contentContainerStyle={{width,minHeight:height,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}} >
      {list.length>0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          keyExtractor={(x) => x['recordID']}
          renderItem={(data) =>{
              return <Text style={{fontSize: 12}}>
                  {data.item.displayName}
                  </Text>;
          }}
        />
      ) : null}
      <Button title="Load Contacts" onPress={getContacts} />
      <Button title="reset" onPress={()=>setList(null)}/>
    </ScrollView>
  );
};

export default Contact;
