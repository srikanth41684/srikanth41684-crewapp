import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useEffect} from 'react';

const numbers = [
  {
    title: 'C',
    operation: 'clear',
  },
  {
    title: '+/-',
    operation: 'addSub',
  },
  {
    title: '%',
    operation: 'modulus',
  },
  {
    title: '/',
    operation: 'divide',
  },
  {
    title: 7,
    operation: 'number',
  },
  {
    title: 8,
    operation: 'number',
  },
  {
    title: 9,
    operation: 'number',
  },
  {
    title: '*',
    operation: 'multi',
  },
  {
    title: 4,
    operation: 'number',
  },
  {
    title: 5,
    operation: 'number',
  },
  {
    title: 6,
    operation: 'number',
  },
  {
    title: '-',
    operation: 'sub',
  },
  {
    title: 1,
    operation: 'number',
  },
  {
    title: 2,
    operation: 'number',
  },
  {
    title: 3,
    operation: 'number',
  },
  {
    title: '+',
    operation: 'add',
  },
  {
    title: '.',
    operation: 'dot',
  },
  {
    title: 0,
    operation: 'number',
  },
  {
    title: '>',
    operation: 'back',
  },
  {
    title: '=',
    operation: 'equal',
  },
];

const Calculator = () => {
  const [commObj, setCommObj] = useState({
    calsiValue: '',
    total: '',
    v1: null,
    v2: null,
  });

  function calsioHandler(value, opr) {
    if (opr !== 'equal' && opr !== 'back' && opr !== 'clear') {
      setCommObj(prev => ({
        ...prev,
        calsiValue: prev.calsiValue + value,
      }));
    }
    if (opr === 'clear') {
      setCommObj(prev => ({
        ...prev,
        calsiValue: '',
      }));
    }
  }

  useEffect(() => {
    console.log('calsiocommObj------>', commObj);
  }, [commObj]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            paddingTop: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}>
            Calculator
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'gray',
                }}>
                {commObj.total}
              </Text>
            </View>
            <View
              style={{
                padding: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                {commObj.calsiValue}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              paddingTop: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 20,
                }}>
                {numbers.map((item, index) => {
                  return (
                    <TouchableWithoutFeedback
                      key={index}
                      onPress={state => {
                        calsioHandler(item.title, item.operation);
                      }}>
                      <View
                        style={{
                          width: '20%',
                          backgroundColor: '#ffffff',
                          alignItems: 'center',
                          paddingVertical: 15,
                          borderRadius: 40,
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#000',
                          }}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
