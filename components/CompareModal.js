// src/components/CompareModal.js
import React from 'react';
import { Modal, Table, Button } from 'antd';

const CompareModal = ({ visible, onClose, products, addToCompare }) => {
    const columns = [
        // Define columns like in ProductTable
    ];

    return (
        <Modal
            title="Add More Products"
            visible={visible}
            onCancel={onClose}
            footer={null}
            width={800}
        >
            <Table
                columns={columns}
                dataSource={products}
                rowKey="id"
                pagination={{ pageSize: 10 }}
                scroll={{ y: 240 }}
            />
        </Modal>
    );
};

export default CompareModal;
