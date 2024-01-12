import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetail = () => {
  const route = useRoute();
  const { product } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCartPress = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Nếu mặt hàng đã tồn tại trong giỏ hàng, tăng số lượng lên 1
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Nếu mặt hàng không tồn tại trong giỏ hàng, thêm nó với số lượng là 1
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
    alert('Sản phẩm đã được thêm vào giỏ hàng');
  };


  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Giá: ${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <View style={styles.buyContainer}>

        {/* <TouchableOpacity
                                      style={styles.buyButton}
                                      onPress={() => handleAddToCartPress(product)}
                                  >
                                      <Text style={styles.buyButtonText}>Add Cart</Text>
                                  </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'black',
  },
  price: {
    fontSize: 18,
    marginBottom: 12,
    color: 'black',
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: 'black',
  },
  buyButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductDetail;