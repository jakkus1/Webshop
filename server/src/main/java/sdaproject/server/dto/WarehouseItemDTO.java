package sdaproject.server.dto;

import java.math.BigDecimal;

public class WarehouseItemDTO extends AbstractDTO {

    private Integer quantity;

    private BigDecimal price;

    private ProductDTO product;

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }
}
