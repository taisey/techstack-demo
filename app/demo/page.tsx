import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BlocklyComponent from '@/components/BlocklyComponent.client';

const Index: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // ビューポートの高さに合わせる
      }}
    >
      <BlocklyComponent />
      {/* 正方形ブロック */}
      <Box
        sx={{
          width: 400,
          height: 400,
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 1,
        }}
      >
        Block 1
      </Box>

      {/* 右矢印 */}
      <ArrowForwardIosIcon sx={{ color: 'action.active', mx: 2 }} />

      {/* もう一つの正方形ブロック */}
      <Box
        sx={{
          width: 400,
          height: 400,
          backgroundColor: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 1,
        }}
      >
        Block 2
      </Box>
    </Box>
  );
};

export default Index;
