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
    firstValue: '',
    sign: '',
    secondValue: '',
    n1: '',
    n2: '',
  });

  function calsioHandler(value, opr) {
    if (commObj.sign === '' && (opr === 'number' || opr === 'dot')) {
      setCommObj(prev => ({
        ...prev,
        firstValue: prev.firstValue + value,
      }));
    }

    if (commObj.sign !== '' && (opr === 'number' || opr === 'dot')) {
      setCommObj(prev => ({
        ...prev,
        secondValue: prev.secondValue + value,
      }));
    }
    if (opr === 'clear') {
      setCommObj(prev => ({
        ...prev,
        calsiValue: '',
        firstValue: '',
        sign: '',
        secondValue: '',
        total: '',
      }));
    }
    if (opr === 'equal') {
      calculationHandler();
    }
    if (
      opr === 'add' ||
      opr === 'sub' ||
      opr === 'multi' ||
      opr === 'divide' ||
      opr === 'modulus'
    ) {
      setCommObj(prev => ({
        ...prev,
        sign: opr,
      }));
      updateHandler();
    }

    if (opr !== 'clear' && opr !== 'back' && opr !== 'equal') {
      setCommObj(prev => ({
        ...prev,
        calsiValue: prev.calsiValue + value,
      }));
    }
  }

  useEffect(() => {
    calculationHandler();
  }, [commObj.secondValue]);

  const calculationHandler = () => {
    let n1 = Number(commObj.firstValue);
    let n2 = Number(commObj.secondValue);
    let s = commObj.sign;
    console.log('total===>', n1, n2, s);
    if (commObj.secondValue !== '') {
      switch (s) {
        case 'add':
          console.log('add');
          setCommObj(prev => ({
            ...prev,
            total: n1 + n2,
          }));
          break;
        case 'sub':
          console.log('sub');
          setCommObj(prev => ({
            ...prev,
            total: n1 - n2,
          }));
          break;
        case 'multi':
          console.log('multi');
          setCommObj(prev => ({
            ...prev,
            total: n1 * n2,
          }));
          break;
        case 'divide':
          console.log('divide');
          setCommObj(prev => ({
            ...prev,
            total: n1 / n2,
          }));
          break;
        case 'modulus':
          console.log('modulus');
          setCommObj(prev => ({
            ...prev,
            total: n1 % n2,
          }));
          break;
      }
    }
  };

  const updateHandler = () => {
    if (commObj.secondValue !== '') {
      setCommObj(prev => ({
        ...prev,
        firstValue: commObj.total,
        secondValue: '',
      }));
    }
  };

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
                  fontSize: 32,
                  fontWeight: 'bold',
                  color: '#000000',
                }}>
                {commObj.calsiValue}
              </Text>
              {commObj.calsiValue === '' && (
                <Text
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#000009',
                  }}>
                  0
                </Text>
              )}
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
