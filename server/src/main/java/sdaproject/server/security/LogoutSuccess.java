package sdaproject.server.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class LogoutSuccess implements LogoutSuccessHandler {
    private final ObjectMapper objectMapper;
    public LogoutSuccess(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }
    @Override
    public void onLogoutSuccess(HttpServletRequest httpServletRequest, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        response.setContentType("application/json");
        response.getWriter().write( "logout success");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}