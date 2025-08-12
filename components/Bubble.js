/**
 * Bubble Component
 * 
 * Renders a circular bubble for the Bubble Popper game.
 * Each bubble has a position (x, y) and size (radius).
 * 
 * CURRENT IMPLEMENTATION:
 * - Simple green circle with drop shadow
 * - Fixed radius (typically 30)
 * - Absolute positioning
 * 
 * ============== STUDENT EXTENSION IDEAS ==============
 * Consider enhancing this component with:
 * 1. Different bubble types/colors
 * 2. Animation effects (pulsing, rotation)
 * 3. Pop animation when hit by laser
 * 4. Special power-up bubbles
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Bubble component for the Bubble Popper game
 * 
 * @param {Object} props - Component properties
 * @param {number} props.x - X coordinate of the bubble
 * @param {number} props.y - Y coordinate of the bubble
 * @param {number} props.radius - Radius of the bubble
 * @returns {React.Component} Rendered bubble
 */
export default function Bubble({ x, y, radius }) {
  return (
    <View
      style={[
        styles.bubble,
        {
          left: x,
          top: y,
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
        },
      ]}
    >
        <View
              style={[
                styles.ring1,
                {
                  top: 4.0,
                  left: 4.0,
                  width: radius * 1.75,
                  height: radius * 1.75,
                  borderRadius: radius,
            },
          ]}
      />
      <View
            style={[
              styles.ring2,
              {
                top: 8.0,
                left: 8.0,
                width: radius * 1.5,
                height: radius * 1.5,
                borderRadius: radius,
          },
        ]}
      />
      <View
              style={[
                styles.ring1,
                {
                  top: 12.0,
                  left: 12.0,
                  width: radius * 1.25,
                  height: radius * 1.25,
                  borderRadius: radius,
            },
          ]}
      />
      <View
        style={[
          styles.ring2,
          {
            top: 16.0,
            left: 16.0,
            width: radius * 1.00,
            height: radius * 1.00,
            borderRadius: radius,
          },
        ]}
      />
      <View
          style={[
            styles.ring1,
            {
              top: 20.0,
              left: 20.0,
              width: radius * 0.75,
              height: radius * 0.75,
              borderRadius: radius,
            },
          ]}
        />
      <View
        style={[
          styles.ring2,
          {
            top: 24.0,
            left: 24.0,
            width: radius * 0.50,
            height: radius * 0.50,
            borderRadius: radius,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    backgroundColor: '#F20202',
    borderWidth: 0,
    borderColor: '#F20202',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  ring1: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  ring2: {
      position: 'absolute',
      backgroundColor: '#F20202',
  }
});
