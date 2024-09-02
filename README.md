# CI/CD Pipeline with Azure DevOps and Jira
![image](https://github.com/user-attachments/assets/19a4bbe5-573a-43bf-933d-b0e5bd136d28)
![image](https://github.com/user-attachments/assets/aae629da-f845-4cd5-aade-62775e51cb0a)

## Overview

This project showcases a CI/CD pipeline implementation using Azure DevOps and Jira. Developed during my first week as an intern at Nevotek, it includes end-to-end integration and deployment to Azure Web Apps.

## Key Features

- **Development Environment**:
  - **Tools**: Docker, Azure CLI, Visual Studio Code.
  - **Platforms**: Windows and Linux VM for development.

- **Pipeline Workflow**:
  <table>
    <tr>
      <td>
        <ol>
          <li>Code commits to Azure Repos.</li>
          <li>CI pipeline triggers on master branch merge.</li>
          <li>Builds artifact and deploys using blue-green strategy.</li>
          <li>Runs tests and pushes to Azure Container Registry (ACR).</li>
          <li>Deploys to staging and creates Jira issue for testing.</li>
          <li>Swaps environments and requires manager approval for production.</li>
        </ol>
      </td>
      <td>
        <img src="https://github.com/user-attachments/assets/2ec0b839-955d-486a-a4c2-1e200780c874" alt="Pipeline Workflow Image" style="max-width: 400px;">
      </td>
    </tr>
  </table>

## Challenges

- Configured service connections and principals in Azure.
- Managed Azure Web App port configurations.
- Integrated Jira for automated issue tracking.

## Learnings

- Implemented blue-green deployments.
- Integrated multiple services in a CI/CD pipeline.
- Adapted to limitations with local agent setup.
